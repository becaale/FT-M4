const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ability",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["name", "mana_cost"],
        },
      ],
    }
  );
};

/* 
name*: string
description: text
mana_cost*: float
*/
