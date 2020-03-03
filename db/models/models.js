const { userSchema } = require('../schema/schema');

exports.user = mongoose.model('user', userSchema);