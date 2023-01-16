const { Router } = require("express");
const { Op, Character, Role } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  const { code, name, age, race, hp, mana } = req.body;
  if (!code || !name || !hp || !mana) return res.status(404).send("Falta enviar datos obligatorios");
  try {
    const newChar = await createChar(code, name, age, race, hp, mana);
    res.status(201).json(newChar);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

const createChar = async (code, name, age, race, hp, mana) => {
  const newChar = await Character.create({ code, name, age, race, hp, mana });
  return newChar;
};

router.get("/", async (req, res) => {
  const { race } = req.query;
  let chars;
  try {
    if (race)
      chars = await getCharacters({
        where: { race },
      });
    else chars = await getCharacters();
    res.status(200).json(chars);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const getCharacters = async () => {
  const characters = await User.findAll();
  return characters;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

module.exports = router;
