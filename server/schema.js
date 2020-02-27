const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

/* User Schema */
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    user_email: { type: GraphQLString },
    user_password: { type: GraphQLString },
    board: { type: BoardType }
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