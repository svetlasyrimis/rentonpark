const mongoose = require("mongoose");

const tariffSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  price: Number
});

module.exports = mongoose.model("Tariff", tariffSchema);
