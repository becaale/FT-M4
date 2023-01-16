const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
const PageModel = require("./models/Page");

const DB_USER = "postgres";
const DB_PASSWORD = "admin";
const DB_HOST = "localhost:5432";

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/democlase`,
  { logging: false }
);

UserModel(database);
PostModel(database);
PageModel(database);

const { User, Post, Page } = database.models;

User.hasMany(Post); // tiene varios
Post.belongsTo(User); // pertenece a

User.belongsToMany(Page, { through: "UserPage" });
Page.belongsToMany(User, { through: "UserPage" });

module.exports = { database, ...database.models };
