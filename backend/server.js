const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// MongoDb
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

// Express
const app = express();

// Cors
const corsOptions = {
  origin: true,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type", "authorization"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Body-parser
app.use(bodyParser.json());
// Routes
app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/feedback", feedbackRoutes);
/**
 * texte, date, user_id
 */

// Server
app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});
