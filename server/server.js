const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const PORT = 4000
const typeDefs  = require('./schema.js')
const resolvers = require('./resolvers.js')
const mongoose = require('mongoose')
require('dotenv').config()

const server = new ApolloServer({ typeDefs, resolvers })
mongoose.connect(`mongodb+srv://michael_thompson:${process.env.MongoDB_password}@mylife-ajkjc.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  else{
    console.log('Connected...');
  }
})
server.applyMiddleware({ app })
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
