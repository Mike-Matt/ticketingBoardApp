const express = require("express");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema.js");

const app = express();
const PORT = 4000;


const server = new ApolloServer({ typeDefs });
server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
