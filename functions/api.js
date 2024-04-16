const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const serverless = require("serverless-http");
const router = express.Router();

const { PORT } = process.env;

// middleware for cors
app.use(cors());

// middleware for json format
app.use(express.json());

// middleware for generating token

// serve static files from server
router.use("/static-files", express.static("public"));

// routes - xbox & PS games
const xboxPsRoutes = require("../routes/routes-xbox-ps");
router.use("/games", xboxPsRoutes);
router.use("/", (req, res) => {
  res.send("Server Deployed successfully");
});

// listen to Port
// app.listen(PORT, () => {
//   console.log("Listening to server on ", PORT);
// });

// app.use("/.netlify/functions/api", router);
app.use("/", xboxPsRoutes);
module.exports.handler = serverless(app);
