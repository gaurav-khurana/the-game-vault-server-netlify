const xboxPsGames = require("./seed-data/xbox-ps-games");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("allgames").del();
  await knex("allgames").insert(xboxPsGames);
};
