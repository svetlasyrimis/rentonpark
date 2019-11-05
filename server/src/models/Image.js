const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  type: String,
  image: {
    type: Map,
    of: String
  },
  crop: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
});

module.exports = mongoose.model("Image", imageSchema);
