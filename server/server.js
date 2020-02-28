const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const PORT = 4000
const TicketingAppSchema  = require('./schema.js')

const server = new ApolloServer({ schema: TicketingAppSchema });
server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)

