<template>
    <div>
        <ul>
            <li v-for="category in categories">
                <button @click= "showNews(category.code)">{{category.name}}</button>
            </li>
        </ul>

    </div>
</template>

<script>
    import gql from 'graphql-tag'

    const GET_CATEGORIES_QUERY = gql`
        query GET_CATEGORIES_QUERY {
            categories {
                code
                name
                news {
                    id
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
                newsList: []
            }
        },
        methods:{
            
        }
    }
</script>