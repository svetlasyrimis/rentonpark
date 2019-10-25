const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  type_image: String,
  body: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Image", imageSchema);
