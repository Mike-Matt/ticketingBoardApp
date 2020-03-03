const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.userSchema = new Schema({
  user: {
    email: String,
    password: String,
    name: String,
    boards: [
      {
        name: String,
        columns: [
          {
            name: String,
            tickets: [
              {
                name: String,
                text: String
              }
            ]
          }
        ]
      }
    ]
  }
});
