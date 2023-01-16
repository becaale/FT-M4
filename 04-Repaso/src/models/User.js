const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female"),
      },
    },
    { timestamps: false }
  );
};
