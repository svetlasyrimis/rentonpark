const boom = require("boom");
const moment = require("moment");

// Get Data Models
const Reservation = require("../models/Reservation");
const User = require("../models/User");

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
    req.body.start = moment(req.body.start);
    req.body.finish = moment(req.body.finish);
    console.log(req.body);
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
      reservation = {
        id: e._id,
        color: "#b36500",
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
