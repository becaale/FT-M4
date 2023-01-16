const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Character",
    {
      code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          len: [1, 5],
        },
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      race: {
        type: DataTypes.ENUM,
        values: ["Human", "Elf", "Machine", "Demon", "Animals", "Other"],
        defaultValue: "Other",
      },
      hp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mana: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};

/* 
code*: string (Máximo 5 caracteres) [PK]
name*: string (Debe ser único)
age: integer
race: enum (Posibles valores: 'Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other')
hp*: float
mana*: float
date_added: timestamp without time 
*/
