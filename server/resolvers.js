const { user }  = require('../db/models/models.js')


module.exports = {
  Query: {
    user: (__, userArgs) => {
      const userPassword = userArgs.password
      const userEmail = userArgs.email
      return user.findOne({_id: '5e5ef3711c9d440000aaff30'})
      .then(
      response => console.log(response, userEmail, userPassword)
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