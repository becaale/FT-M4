const { Sequelize, Op } = require("sequelize");
const modelCharacter = require("./models/Character.js");
const modelAbility = require("./models/Ability.js");
const modelRole = require("./models/Role.js");

const dbUser = "postgres";
const dbPassword = "Milcien.2015";
const pgDatabase = "henry_sequelize";

const db = new Sequelize(`postgres://${dbUser}:${dbPassword}@localhost:5432/${pgDatabase}`, {
  logging: false,
});

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
  ...db.models,
  db,
  Op,
};
