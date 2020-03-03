const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const userSchema = new Schema({
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
