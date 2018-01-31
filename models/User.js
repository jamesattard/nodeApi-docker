const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  name: String,
  surname: String
});

module.exports = mongoose.model("users", userSchema);
