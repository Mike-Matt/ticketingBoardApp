const { user } = require('../db/models/models');

module.exports = {
  Query: {
    user: (_,{email, password}) => {
      console.log('Working')
      console.log(email, password)
      return user.findOne({ email }).exec();
    }
  }
}





// {email: email, password: password}