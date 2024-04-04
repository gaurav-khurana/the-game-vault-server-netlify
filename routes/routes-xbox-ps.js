const router = require("express").Router();
require("dotenv").config();
// const xboxController = require("../controllers/xboxController");
const allGamesController = require("../controllers/allGamesController");

// routes for xbox

// route to get all xbox games

router.route("/xbox").get(allGamesController.getAllXboxGames);

// router.route("/xbox").get(xboxController.getAllXboxGames);

// route to get single xbox game by id

router.route("/xbox/:id").get(allGamesController.singleXboxGame);
// router.route("/xbox/:id").get(xboxController.singleXboxGame);

// routes for PS games

// route to GET all PS games

router.route("/ps").get(allGamesController.getAllPsGames);
// router.route("/ps").get(psController.getAllPsGames);

// route to GET single Ps game by id

router.route("/ps/:id").get(allGamesController.getSinglePsGame);
// router.route("/ps/:id").get(psController.getSinglePsGame);

module.exports = router;
