import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        id: String
        email: String
        password: String
        firstName: String
        lastName: String
        permissionLevel: Int
    }
    type Category { 
        id: Int
        code: String
        name: String
        news: [New]
    }
    type New {
        id: Int
        title: String
        content: String
        created: String
        created_by: String
        summary: String
    }
    type Query { 
        categories: [Category]
        news: [New]
        newById(id: Int): New
    }
`
export {typeDefs};