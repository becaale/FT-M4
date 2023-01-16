const { Router } = require("express");
const {
  getUsers,
  findUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const { name } = req.query;
  let users;
  try {
    if (name) users = await findUsers(name);
    else users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { name, email, phone, gender } = req.body;
    const newUser = await createUser(name, email, phone, gender);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.put("/", (req, res) => {
  const { id, name, email } = req.body;

  try {
    const updatedUser = updateUser(id, name, email);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.delete("/:id/delete", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteUser(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// USUARIOS
// GET /users => me devuelva todos los users 👌
// GET /users?name= => me trae todos los que tengan ese nombre AHÍ VEMOS 👌
// GET /users/:id => me devuelve un usuario con id específico 👌
// POST /users => crear un usuario nuevo 👌
// PUT /users => modificar un usuario específico
// DELETE /users/:id/delete => eliminar un usuario específico

module.exports = usersRouter;
