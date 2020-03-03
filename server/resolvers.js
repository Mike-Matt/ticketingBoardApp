module.exports = {
  Query: {
    user: (_,{email, password}) => {
      user.find(email, password)
    }
  }
}