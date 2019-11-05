const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  image: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Section", sectionSchema);
