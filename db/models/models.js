const { userSchema } = require('../schema/schema');

export const user = mongoose.model('user', userSchema);