const multer = require("fastify-multer");
const path = require("path");

//Multer
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

// Import Swagger documentation
// const documentation = require('./documentation/imageApi')

const routes = [
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
  }
];

module.exports = routes;
