const fastify = require("fastify")({
  logger: true
});

const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/rentondb")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
