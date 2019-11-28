const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  title: String,
  total: Number,
  start: Date,
  finish: Date,
  state: Number,
  description: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);
