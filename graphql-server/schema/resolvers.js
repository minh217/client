const BASE_URL = 'http://localhost:5000/';
const CHILD_URL = {
    news: 'news',
    categories: 'categories'
}
import fetch from "node-fetch";
const resolvers= {
    Query: {
        news: async () => {
            return await fetch(`${BASE_URL}${CHILD_URL.news}`).then(res => res.json());
        },
        categories: async() => {
            return await fetch(`${BASE_URL}${CHILD_URL.categories}`).then(res => res.json());
        },
        newById: async(parent, args) => {
            return await fetch(`${BASE_URL}${CHILD_URL.news}/${args.id}`)
            .then(res => {
                if(res.status === 200)
                {
                    return res.json();
                }else{
                    return null;
                }
            });
        }
    },
    Category: {
        news: async (category) => {
            
            return await fetch(`${BASE_URL}${CHILD_URL.news}/by-category/${category.id}`)
            .then(res => res.json())
        }
    }
}
export {resolvers};