const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { PORT } = process.env;

// middleware for cors
app.use(cors());

// middleware for json format
app.use(express.json());

// middleware for generating token

// middleware for auth

// serve static files from server
app.use("/static-files", express.static("public"));

// routes - xbox

// const xboxRoutes = require("./routes/routes-xbox");
// app.use("/", xboxRoutes);

// routes - PS

// const psRoutes = require("./routes/routes-PS");
// app.use("/", psRoutes);

// routes - xbox & PS games
const xboxPsRoutes = require("./routes/routes-xbox-ps");
app.use("/games", xboxPsRoutes);

// listen to Port
app.listen(PORT, () => {
  console.log("Listening to server on ", PORT);
});
