const { RESTDataSource } = require("apollo-datasource-rest");

class NewsAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = 'http://localhost:3000/';
    }

    getNews = async () => {
        const results = await this.get('news');
        return results;
    } 
}

module.exports = NewsAPI;