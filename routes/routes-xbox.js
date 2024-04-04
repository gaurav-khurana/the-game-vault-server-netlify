const router = require("express").Router();
require("dotenv").config();
const xboxController = require("../controllers/xboxController");

// routes for xbox

// route to get all xbox games
router.route("/xbox").get(xboxController.getAllXboxGames);

// route to get single xbox game by id
router.route("/xbox/:id").get(xboxController.singleXboxGame);

module.exports = router;
