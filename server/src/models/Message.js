const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  type: String,
  lastname: String,
  phone: String,
  email: String,
  days: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("Message", messageSchema);
