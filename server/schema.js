const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

//User
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: ()=> ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    user_email: { type: GraphQLString },
    user_password: { type: GraphQLString },
    board: { type: BoardType }
  })
})

//Board
const BoardType = new GraphQLObjectType({
  name: 'Board',
  fields: ()=> ({
    board_id: { type: GraphQLInt },
    board_name: { type: GraphQLString },
    column: { type: ColumnType }
  })
})

//Column
const ColumnType = new GraphQLObjectType({
  name: 'Column',
  fields: ()=> ({
    column_id: { type: GraphQLInt},
    column_name: { type: GraphQLString },
    ticket: { type: TicketType }
  })
})

//Ticket
const TicketType = new GraphQLObjectType({
  name: 'Ticket',
  fields: ()=> ({
    ticket_id: { type: GraphQLInt},
    ticket_name: { type: GraphQLString },
    ticket_text: { type: GraphQLString }
  })
})