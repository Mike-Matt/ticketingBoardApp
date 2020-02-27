const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = require('graphql');

/* User Schema */
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    user_email: { type: GraphQLString },
    user_password: { type: GraphQLString },
    column: { type: BoardType }
  })
});

/* Board Schema */
const BoardType = new GraphQLObjectType({
  name: 'Board',
  fields: () => ({
    board_id: { type: GraphQLInt },
    board_name: { type: GraphQLString },
    column: { type: ColumnType },
  })
}); 

/* Column Schema */
const ColumnType = new GraphQLObjectType({
  name: 'Column',
  fields: () => ({
    column_id: { type: GraphQLInt },
    column_name: { type: GraphQLString },
    ticket: { type: TicketType },
  })
}); 

/* Ticket Schema */
const TicketType = new GraphQLObjectType({
  name: 'Ticket',
  fields: () => ({
    ticket_id: { type: GraphQLInt },
    ticket_name: { type: GraphQLString },
    ticket_text: { type: GraphQLString },
  })
});

/* Root Query */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
     user: {
       type: UserType,
       args: { user_email: { type: GraphQLString }, user_password: { type: GraphQLString }},
       resolve(parent, args)
     }
  }
});