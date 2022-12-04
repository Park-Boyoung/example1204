// @ts-check

const express = require("express");

const db = require("../controllers/userController");

const router = express.Router();

// localhost:7000/users
router.get("/users", async (req, res) => {
  const users = await db.getUsers();

  console.log(users);
  res.render("users", { users });
});

module.exports = router;
