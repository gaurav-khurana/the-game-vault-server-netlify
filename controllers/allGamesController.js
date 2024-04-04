const knex = require("knex")(require("../knexfile"));

// controller to GET All Xbox Games
const getAllXboxGames = (req, res) => {};

// controller to GET Single Xbox Game by Id
const singleXboxGame = (req, res) => {};

// controller to Get All PS Games
const getAllPsGames = (req, res) => {};

// controller to Get Single PS Game by Id
const getSinglePsGame = (req, res) => {};

module.exports = {
  getAllXboxGames,
  singleXboxGame,
  getAllPsGames,
  getSinglePsGame,
};
