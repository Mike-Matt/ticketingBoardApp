module.exports = {
  Query: {
    user: (_,{email, password}) => {
      user.findOne(email, password)
    }
  }
}




