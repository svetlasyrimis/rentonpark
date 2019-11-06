const boom = require("boom");

// Get Data Models
const Section = require("../models/Section");

// Get all sections
exports.getSections = async (req, reply) => {
  try {
    const sections = await Section.find();
    return sections;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get section by TYPE
exports.getSectionsByType = async (req, reply) => {
  try {
    const type = { type: req.params.type };
    const sections = await Section.find(type);
    return sections;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single section by ID
exports.getSingleSection = async (req, reply) => {
  try {
    const id = req.params.id;
    const section = await Section.findById(id);
    return section;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new section
exports.addSection = async (req, reply) => {
  try {
    const body_req = req.body;
    const data = {
      title: body_req.title,
      description: body_req.description,
      type: body_req.type,
      image: req.file
    };
    const section = new Section(data);
    return section.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing section
exports.updateSection = async (req, reply) => {
  try {
    const id = req.params.id;
    req.body.crop = JSON.parse(req.body.crop);
    req.body.description = JSON.parse(req.body.description);
    if (req.file) {
      req.body.image = req.file;
    }
    const section = req.body;
    const { ...updateData } = section;
    const update = await Section.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a section
exports.deleteSection = async (req, reply) => {
  try {
    const id = req.params.id;
    const section = await Section.findByIdAndRemove(id);
    return section;
  } catch (err) {
    throw boom.boomify(err);
  }
};
