const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const PORT = 4000
const typeDefs  = require('./schema.js')
const resolvers = require('./resolvers.js')
const mongoose = require('mongoose')

const server = new ApolloServer({ typeDefs, resolvers })
mongoose.connect("mongodb+srv://mylife-ajkjc.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true })
server.applyMiddleware({ app })
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
