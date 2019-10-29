const boom = require("boom");

// Get Data Models
const User = require("../models/User");

exports.getUsers = async (req, reply) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};
