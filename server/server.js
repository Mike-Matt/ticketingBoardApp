const express = require('express');
const graphqlHTTP = require('express-graphql');

const TicketingAppSchema = require('./schema.js');

const PORT = 4000;

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: TicketingAppSchema,
  graphiql: true
}));


app.listen(PORT, () => {
  console.log(`Express GraphQL Server started on port ${PORT}`);
});