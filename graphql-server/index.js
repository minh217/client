import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js" ;
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({embed: true}),
    ]
});
server.listen().then(({url}) => {
    console.log(`Graphql Server running at: ${url}`);
});