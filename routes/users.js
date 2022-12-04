// @ts-check
const express = require("express");
const db = require("../controllers/memberController");

const router = express.Router();

router.get("/", async (req, res) => {
  const USER = await db.getAllUsers();
  const userCounts = USER.length;

  res.render("users", {
    USER,
    userCounts,
  });
});

module.exports = router;
