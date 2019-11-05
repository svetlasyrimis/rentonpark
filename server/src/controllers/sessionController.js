const boom = require("boom");

// Get Data Models
const Session = require("../models/Session");

// Get all sessions
exports.getSessions = async (req, reply) => {
  try {
    const sessions = await Session.find();
    return sessions;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single session by ID
exports.getSingleSession = async (req, reply) => {
  try {
    const id = req.params.id;
    const session = await Session.findById(id);
    return session;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get main session
exports.getMainSession = async (req, reply) => {
  try {
    const sessions = await Session.find({ main: true });
    return sessions[0];
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update main session
exports.updateMainSession = async (req, reply) => {
  try {
    await Session.updateMany({}, { main: false });
    const id = req.params.id;
    const update = await Session.findByIdAndUpdate(
      id,
      { main: true },
      {
        new: true
      }
    );
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new session
exports.addSession = async (req, reply) => {
  try {
    const session = new Session(req.body);
    return session.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing session
exports.updateSession = async (req, reply) => {
  try {
    const id = req.params.id;
    const session = req.body;
    const { ...updateData } = session;
    const update = await Session.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a session
exports.deleteSession = async (req, reply) => {
  try {
    const id = req.params.id;
    const session = await Session.findByIdAndRemove(id);
    return session;
  } catch (err) {
    throw boom.boomify(err);
  }
};
