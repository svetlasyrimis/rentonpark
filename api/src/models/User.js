const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  username: String,
  name: String,
  lastname: String,
  sex: {
    type: String,
    enum: ["Hombre", "Mujer"]
  },
  phone_prefix: String,
  phone: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);
