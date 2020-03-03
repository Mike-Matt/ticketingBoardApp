module.exports = {
  Query: {
    user: (_,{email, password}) => {
      return user.find(email, password)
    }
  }
}