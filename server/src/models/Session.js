const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  number: Number,
  name: String,
  price: Number,
  extra_weekend: Number,
  description: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Session", sessionSchema);
