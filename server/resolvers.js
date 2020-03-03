const { user } = require('../db/models/models.js')

module.exports = {
  Query: {
    user: (_,{email, password}) => {
      console.log(email, password)
      return user.find({email: email, password: password})
    }
  }
}
//




// {email: email, password: password}