const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  title: String,
  total: Number,
  start: Date,
  finish: Date,
  description: {
    type: Map,
    of: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session"
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);
