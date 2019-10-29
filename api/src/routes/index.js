const multer = require("fastify-multer");
const path = require("path");
// Validations
const {
  validatePostLogin,
  validatePostSignup
} = require("../validations/auth");

// Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/images"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const uploadImage = multer({
  storage
}).single("image");

// Import our Controllers
const imageController = require("../controllers/imageController");
const sectionController = require("../controllers/sectionController");
const sessionController = require("../controllers/sessionController");
//const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// Import Swagger documentation
// const documentation = require('./documentation/imageApi')

const routes = [
  // Images
  {
    method: "GET",
    url: "/api/images",
    handler: imageController.getImages
  },
  {
    method: "GET",
    url: "/api/images/:id",
    handler: imageController.getSingleImage
  },
  {
    method: "GET",
    url: "/api/images_type/:type",
    handler: imageController.getImagesByType
  },
  {
    method: "POST",
    preHandler: uploadImage,
    url: "/api/images",
    handler: imageController.addImage
    // schema: documentation.addImageSchema
  },
  {
    method: "PUT",
    preHandler: uploadImage,
    url: "/api/images/:id",
    handler: imageController.updateImage
  },
  {
    method: "DELETE",
    url: "/api/images/:id",
    handler: imageController.deleteImage
  },
  // Sections
  {
    method: "GET",
    url: "/api/sections",
    handler: sectionController.getSections
  },
  {
    method: "GET",
    url: "/api/sections/:id",
    handler: sectionController.getSingleSection
  },
  {
    method: "GET",
    url: "/api/sections_type/:type",
    handler: sectionController.getSectionsByType
  },
  {
    method: "POST",
    preHandler: uploadImage,
    url: "/api/sections",
    handler: sectionController.addSection
  },
  {
    method: "PUT",
    preHandler: uploadImage,
    url: "/api/sections/:id",
    handler: sectionController.updateSection
  },
  {
    method: "DELETE",
    url: "/api/sections/:id",
    handler: sectionController.deleteSection
  },
  // Sessions
  {
    method: "GET",
    url: "/api/sessions",
    handler: sessionController.getSessions
  },
  {
    method: "GET",
    url: "/api/sessions/:id",
    handler: sessionController.getSingleSession
  },
  {
    method: "POST",
    url: "/api/sessions",
    handler: sessionController.addSession
  },
  {
    method: "PUT",
    url: "/api/sessions/:id",
    handler: sessionController.updateSession
  },
  {
    method: "DELETE",
    url: "/api/sessions/:id",
    handler: sessionController.deleteSession
  },
  //Auth
  {
    method: "POST",
    url: "/auth/login",
    schema: validatePostLogin,
    handler: authController.postLogin
  },
  {
    method: "POST",
    url: "/auth/signup",
    schema: validatePostSignup,
    handler: authController.postSignup
  }
];

module.exports = routes;
