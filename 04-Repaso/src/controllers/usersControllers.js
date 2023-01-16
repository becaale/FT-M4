const { User, Page } = require("../db");
const { Op } = require("sequelize");

// TODOS LOS CONTROLADORES DE USUARIOS

const createUser = async (name, email, phone, gender) => {
  const newUser = await User.create({ name, email, phone, gender });
  return newUser;
};

const getUsers = async () => {
  const users = await User.findAll({
    include: {
      model: Page,
      attributes: ["title"],
      through: {
        // y de la tabla intermedia.....
        attributes: [],
      },
    },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const findUsers = async (name) => {
  console.log("findUsers");
  const results = await User.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  return results;
};

// const updateUser = (id, name, email) => {
//   if (!id || !name || !email) throw Error("Missing data");
//   const user = users.find((user) => user.id == id);
//   if (!user) throw Error("User does not exist");

//   user.name = name;
//   user.email = email;

//   return user;
// };

const deleteUser = async (id) => {
  const userToDelete = await User.findByPk(id);
  await userToDelete.destroy();
  return userToDelete;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  findUsers,
  deleteUser,
};
