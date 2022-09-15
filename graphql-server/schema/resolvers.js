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
        }
    },
    Category: {
        news: async (category) => {
            console.log(`${BASE_URL}${CHILD_URL.news}/by-category/${category.id}`);
            return await fetch(`${BASE_URL}${CHILD_URL.news}/by-category/${category.id}`).then(res => res.json())
        }
    }
}
export {resolvers};