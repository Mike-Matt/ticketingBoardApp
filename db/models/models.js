const { userSchema } = require('../schema/schema');
const mongoose = require('mongoose');

exports.user = mongoose.model('user', userSchema);