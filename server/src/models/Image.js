const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  type: String,
  image: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Image", imageSchema);
