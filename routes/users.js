// @ts-check
const express = require("express");
const db = require("../controllers/userController");

const router = express.Router();

router.get("/", async (req, res) => {
  const USER = await db.getAllUsers();
  const userCounts = USER.length;

  res.render("userInfo", {
    USER,
    userCounts,
  });
});

module.exports = router;
