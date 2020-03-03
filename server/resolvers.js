<<<<<<< HEAD
=======

>>>>>>> 2e5932f53758c6520de7538252fd156955edcd88
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