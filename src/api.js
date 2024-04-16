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
app.use("/static-files", express.static("public"));

// routes - xbox & PS games
const xboxPsRoutes = require("../routes/routes-xbox-ps");
app.use("/games", xboxPsRoutes);
app.use("/", (req, res) => {
  res.send("Server Deployed successfully");
});

// listen to Port
app.listen(PORT, () => {
  console.log("Listening to server on ", PORT);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
