const multer = require("fastify-multer");
const path = require("path");
// Validations
const {
  validatePostLogin,
  validatePostSignup
} = require("../validations/auth");
// Multer
const storage = multer.diskStorage({
  //destination: path.join(__dirname, "../public/images"),
  destination: "../public/images",
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
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const tariffController = require("../controllers/tariffController");
const reservationController = require("../controllers/reservationController");
const messageController = require("../controllers/messageController");

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
  },
  // Users
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers
  },
  // Tariffs
  {
    method: "GET",
    url: "/api/tariffs",
    handler: tariffController.getTariffs
  },
  {
    method: "GET",
    url: "/api/tariffs/:id",
    handler: tariffController.getSingleTariff
  },
  {
    method: "POST",
    url: "/api/tariffs",
    handler: tariffController.addTariff
  },
  {
    method: "PUT",
    url: "/api/tariffs/:id",
    handler: tariffController.updateTariff
  },
  {
    method: "DELETE",
    url: "/api/tariffs/:id",
    handler: tariffController.deleteTariff
  },
  // Reservations
  {
    method: "GET",
    url: "/api/reservations",
    handler: reservationController.getReservations
  },
  {
    method: "GET",
    url: "/api/reservations/:id",
    handler: reservationController.getSingleReservation
  },
  {
    method: "POST",
    url: "/api/reservations",
    handler: reservationController.addReservation
  },
  {
    method: "PUT",
    url: "/api/reservations/:id",
    handler: reservationController.updateReservation
  },
  {
    method: "DELETE",
    url: "/api/reservations/:id",
    handler: reservationController.deleteReservation
  },
  // Messages
  {
    method: "GET",
    url: "/api/messages",
    handler: messageController.getMessages
  },
  {
    method: "GET",
    url: "/api/messages/:id",
    handler: messageController.getSingleMessage
  },
  {
    method: "POST",
    url: "/api/messages",
    handler: messageController.addMessage
  },
  {
    method: "PUT",
    url: "/api/messages/:id",
    handler: messageController.updateMessage
  },
  {
    method: "DELETE",
    url: "/api/messages/:id",
    handler: messageController.deleteMessage
  }
];

module.exports = routes;
