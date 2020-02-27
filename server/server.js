const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const PORT = 4000
const { TicketingAppSchema } = require('./schema.js')

app.use('/graphql', graphqlHTTP({
  schema: TicketingAppSchema,
  graphiql: true
}))

app.listen(PORT, ()=>{
  console.log(`Server listening on PORT ${PORT}`)
})
