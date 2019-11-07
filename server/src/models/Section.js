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
  },
  crop: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
});

module.exports = mongoose.model("Section", sectionSchema);
