const boom = require("boom");

// Get Data Models
const Message = require("../models/Message");

// Get all messages
exports.getMessages = async (req, reply) => {
  try {
    const messages = await Message.find();
    return messages;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single message by ID
exports.getSingleMessage = async (req, reply) => {
  try {
    const id = req.params.id;
    const message = await Message.findById(id);
    return message;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new message
exports.addMessage = async (req, reply) => {
  try {
    const message = new Message(req.body);
    return message.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing message
exports.updateMessage = async (req, reply) => {
  try {
    const id = req.params.id;
    const message = req.body;
    const { ...updateData } = message;
    const update = await Message.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a message
exports.deleteMessage = async (req, reply) => {
  try {
    const id = req.params.id;
    const message = await Message.findByIdAndRemove(id);
    return message;
  } catch (err) {
    throw boom.boomify(err);
  }
};
