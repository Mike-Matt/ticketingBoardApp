const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

//User
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: ()=> ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    board: { type: BoardType }
  })
})

//Board
const BoardType