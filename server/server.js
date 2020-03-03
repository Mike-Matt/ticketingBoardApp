const express = require("express");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema.js");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connected"))
  .catch(err => console.error(err))

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
