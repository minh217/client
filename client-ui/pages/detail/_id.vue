<template>
    <div>
        <div>
            <a href="/">Back</a>
        </div>
        <div>
            <h1 v-if="notFound">Not Found</h1>
            <div v-if="!notFound">
                <h1>{{detail.title}}</h1>
                <p>{{detail.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

    const GET_NEW_BY_ID = gql`
        query GET_NEW_BY_ID($newId: Int! ){
            newById(id: $newId){
                title
                content
            }
        }
    `;
    export default {
        data() {
            return {
                id: 0,
                detail: {
                    title: "",
                    content: ""
                },
                notFound: false
            }
        },
        mounted() {
            this.getDetail();
        },
        methods: {
            async getDetail(){
                const result = await this.$apollo.query({
                    query: GET_NEW_BY_ID,
                    variables: {
                        newId: Number(this.$route.params.id)
                    }
                })
                if(result){
                    
                    if(result.data.newById !== null){
                        this.detail = result.data.newById;
                        this.notFound = false;
                    }else{
                        this.notFound = true;
                    }
                }
                
            }
        }
    }
    
</script>