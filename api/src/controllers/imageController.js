const boom = require("boom");

// Get Data Models
const Image = require("../models/Image");

// Get all images
exports.getImages = async (req, reply) => {
  try {
    const images = await Image.find();
    return images;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get image by TYPE
exports.getImagesByType = async (req, reply) => {
  try {
    const type = { type: req.params.type };
    const images = await Image.find(type);
    return images;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single image by ID
exports.getSingleImage = async (req, reply) => {
  try {
    const id = req.params.id;
    const image = await Image.findById(id);
    return image;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new image
exports.addImage = async (req, reply) => {
  try {
    const image = new Image(req.body);
    return image.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing image
exports.updateImage = async (req, reply) => {
  try {
    const id = req.params.id;
    const image = req.body;
    const { ...updateData } = image;
    const update = await Image.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a image
exports.deleteImage = async (req, reply) => {
  try {
    const id = req.params.id;
    const image = await Image.findByIdAndRemove(id);
    return image;
  } catch (err) {
    throw boom.boomify(err);
  }
};
