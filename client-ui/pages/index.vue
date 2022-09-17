<template>
    <div>
        <div style = "margin-top: 20px">
            <ul class="list-group" >
                <li @click= "showNews(category.news)" v-for="category in categories">
                    <p>{{category.name}}</p>
                </li>
            </ul>
        </div>
        <div>
            <CardNew
                v-if="hasNews"
                v-for="(newItem, index) in newsList"
                :key="index" 
                :title="newItem.title"
                :summary="newItem.summary"
                :id="newItem.id"
            />
            <div v-if="!hasNews">
                No Data
            </div>
            
        </div>
    </div>
</template>

<script>
    import "../common/css/index.css";
    import gql from 'graphql-tag'

    const GET_CATEGORIES_QUERY = gql`
        query GET_CATEGORIES_QUERY {
            categories {
                code
                name
                news {
                    id
                    title
                    summary
                }
            }
        }
    `

    export default {
        apollo: {
            categories: {
                query: GET_CATEGORIES_QUERY,
                prefetch: true
            }
        },
        data() {
            return {
                newsList: [],
                hasNews: false
            }
        },
        methods:{
            showNews(news){
                if(news.length > 0){
                    this.newsList =  news;
                    this.hasNews = true;
                }else {
                    this.hasNews = false;
                }
                
            }
        }
    }
</script>