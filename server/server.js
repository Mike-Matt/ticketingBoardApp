const express = require("express");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema.js");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

const server = new ApolloServer({ typeDefs });

mongoose.connect(
  "mongodb+srv://matthewyee:mattABtim99@mylife-ajkjc.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
    }
    console.log("Connected to the DB...");
  }
);

server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
