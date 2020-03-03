module.exports = {
  Query: {
    user: (_,{email, password}) => {
      return user.findOne(email, password)
    }
  }
}




