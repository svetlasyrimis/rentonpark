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
    method: "POST",
    url: "/api/images",
    handler: imageController.addImage
    // schema: documentation.addImageSchema
  },
  {
    method: "PUT",
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
