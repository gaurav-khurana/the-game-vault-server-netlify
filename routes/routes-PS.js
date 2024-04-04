const router = require("express").Router();
require("dotenv").config();
const psController = require("../controllers/psController");

// routes for PS games

// route to GET all PS games
router.route("/ps").get(psController.getAllPsGames);

// route to GET single Ps game by id
router.route("/ps/:id").get(psController.getSinglePsGame);

module.exports = router;
