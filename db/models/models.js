const { userSchema } = require('../schema/schema.js')
const mongoose = require('mongoose')

exports.user = mongoose.model('user', userSchema)