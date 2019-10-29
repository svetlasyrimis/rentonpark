const boom = require("boom");

// Get Data Models
const Tariff = require("../models/Tariff");

// Get all tariffs
exports.getTariffs = async (req, reply) => {
  try {
    const tariffs = await Tariff.find();
    return tariffs;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single tariff by ID
exports.getSingleTariff = async (req, reply) => {
  try {
    const id = req.params.id;
    const tariff = await Tariff.findById(id);
    return tariff;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new tariff
exports.addTariff = async (req, reply) => {
  try {
    const tariff = new Tariff(req.body);
    return tariff.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing tariff
exports.updateTariff = async (req, reply) => {
  try {
    const id = req.params.id;
    const tariff = req.body;
    const { ...updateData } = tariff;
    const update = await Tariff.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a tariff
exports.deleteTariff = async (req, reply) => {
  try {
    const id = req.params.id;
    const tariff = await Tariff.findByIdAndRemove(id);
    return tariff;
  } catch (err) {
    throw boom.boomify(err);
  }
};
