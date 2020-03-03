const { user }  = require('../db/models/models.js')

module.exports = {
  Query: {
    user: (__, userArgs) => {
      const userPassword = userArgs.password
      const userEmail = userArgs.email
      return user.find()
      .then(
      userData => console.log(userData)
      )
      .catch(err=>{
        console.log(err)
      })
    }
  }
}

//[0]._id
//{password: userPassword, email: userEmail}
//userArgs, userPassword, userEmail)



/*
Query: {
  human(obj, args, context, info) {
    return context.db.loadHumanByID(args.id).then(
      userData => new Human(userData)
    )
  }
}
*/