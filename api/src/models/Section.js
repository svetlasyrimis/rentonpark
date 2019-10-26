const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: String,
  type: String,
  body: {
    type: Map,
    of: String
  },
  image: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Section", sectionSchema);
