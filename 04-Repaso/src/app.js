const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./routes/usersRouter");
const { Page } = require("./db");

const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);

app.post("/pages", async (req, res) => {
  const { title, users } = req.body;
  try {
    const newPage = await Page.create({ title });
    await newPage.addUsers(users);
    res.status(201).json(newPage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// app.use("/posts", postsRouter);

// POSTS
// SUSPENSO 🧧

module.exports = app;
