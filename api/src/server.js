const multer = require("fastify-multer");
const Fastify = require("fastify");
const uuidv4 = require("uuid/v4");
const jwt = require("fastify-jwt");
const mongoose = require("mongoose");
// Import Routes
const routes = require("./routes");
// Import Swagger Options
const swagger = require("./config/swagger");

// create request ids
const createRequestId = () => uuidv4();

// create the server
const fastify = Fastify({
  ignoreTrailingSlash: true,
  logger: {
    genReqId: createRequestId,
    level: "info"
  }
});

// Register JWT
fastify.register(jwt, {
  secret: "e3955806-033a-4be4-a091-bc914276328a"
});

// Register Multer
fastify.register(multer.contentParser);

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

// Connect to DB
mongoose
  .connect("mongodb://localhost/rentondb")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001, "0.0.0.0");
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
