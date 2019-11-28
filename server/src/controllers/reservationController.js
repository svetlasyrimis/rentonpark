const boom = require("boom");
const moment = require("moment");

// Get Data Models
const Reservation = require("../models/Reservation");
const User = require("../models/User");

const ljust = (word, length, char) => {
  var fill = [];
  while (fill.length + word.length < length) {
    fill[fill.length] = char;
  }
  return fill.join("") + word;
};

const formatDate = date => {
  var monthNames = [
    ".ENE",
    ".FEB",
    ".MAR",
    ".ABR",
    ".MAY",
    ".JUN",
    ".JUL",
    ".AGO",
    ".SET",
    ".OCT",
    ".NOV",
    ".DIC"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var hour = date.getHours() + 5;
  var minutes = date.getMinutes().toString();
  return (
    day + monthNames[monthIndex] + "-" + hour + ":" + ljust(minutes, 2, "0")
  );
};

// Get all reservations
exports.getReservations = async (req, reply) => {
  try {
    const reservations = await Reservation.find().populate("session");
    return reservations;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single reservation by ID
exports.getSingleReservation = async (req, reply) => {
  try {
    const id = req.params.id;
    const reservation = await Reservation.findById(id);
    return reservation;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new reservation
exports.addReservation = async (req, reply) => {
  try {
    req.body.start = moment(req.body.start).subtract(5, "hours");
    req.body.finish = moment(req.body.finish).subtract(5, "hours");
    const reservation = new Reservation(req.body);
    return reservation.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing reservation
exports.updateReservation = async (req, reply) => {
  try {
    const id = req.params.id;
    const reservation = req.body;
    const { ...updateData } = reservation;
    const update = await Reservation.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a reservation
exports.deleteReservation = async (req, reply) => {
  try {
    const id = req.params.id;
    const reservation = await Reservation.findByIdAndRemove(id);
    return reservation;
  } catch (err) {
    throw boom.boomify(err);
  }
};

//Get reservations cablepark
exports.reservationCablepark = async (req, reply) => {
  try {
    const date = new Date(req.query.vDate);
    const reservations = await Reservation.find({
      start: { $gte: date }
    }).populate("session");
    var final_reservations = [];
    reservations.forEach(e => {
      if (e.state == 0) {
        var color = "#769e9d";
      } else {
        var color = "#b36500";
      }
      reservation = {
        id: e._id,
        color: color,
        textColor: "#fafafa",
        overlap: false,
        start: e.start,
        end: e.finish,
        title: e.session.name + " - " + e.name,
        vID: "5976",
        vState: e.state,
        vUser: "",
        vProf: 2,
        vType: "1",
        vPrice: e.session.price,
        vExtraW: e.session.extra_weekend,
        vHash: "vGet"
      };
      final_reservations.push(reservation);
    });
    const response = {
      tCustom: null,
      tSessions: final_reservations,
      tSpecial: null
    };
    return response;
    // return {};
  } catch (err) {
    throw boom.boomify(err);
  }
};

//Get reservations by user
exports.reservationByUser = async (req, reply) => {
  try {
    const user_id = req.params.user_id;
    const reservations = await Reservation.find({
      user: user_id
    }).populate("session");
    var final_reservations = [];
    reservations.forEach(e => {
      if (e.state == 0) {
        var color = "#769e9d";
      } else {
        var color = "#b36500";
      }
      reservation = {
        id: e._id,
        color: color,
        textColor: "#fafafa",
        overlap: false,
        start: e.start,
        end: e.finish,
        title: e.session.name + " - " + e.name,
        vID: e._id,
        vState: e.state,
        vUser: "",
        vProf: 2,
        vType: "1",
        vPrice: e.session.price,
        vExtraW: e.session.extra_weekend,
        vHash: "vGet",
        vProduct: e.session.name,
        vTime: formatDate(e.start)
      };
      final_reservations.push(reservation);
    });
    const response = {
      tCustom: null,
      tSessions: final_reservations,
      tSpecial: null
    };
    return response;
    // return {};
  } catch (err) {
    throw boom.boomify(err);
  }
};
