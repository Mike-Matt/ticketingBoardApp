import { GraphQLObjectType, GraphQLNonNull } from "graphql"

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        user_name: { type: new GraphQLNonNull(GraphQLString) },
        user_email: { type: new GraphQLNonNull(GraphQLString) },
        user_password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        
      }
    }
  }
})
