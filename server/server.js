const express = require("express");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema.js");
const mongoose = require("mongoose"); 

const app = express();
const PORT = 4000;

const server = new ApolloServer({ typeDefs });

mongoose.connect('mongodb+srv://mylife-ajkjc.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true });

server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
