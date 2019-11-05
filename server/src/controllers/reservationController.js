const boom = require("boom");

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
