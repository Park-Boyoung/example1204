// @ts-check

const express = require("express");

// const indexRouter = require("./routes");
// const usersRouter = require("./routes/users");

const db = require("./controllers/memberController");

const app = express();

const PORT = 8000;

// ejs setting
app.set("view engine", "ejs");

// router setting
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/member", async (req, res) => {
  const MEMBERS = await db.getAllMembers();
  console.log(MEMBERS);
  res.render("member", { MEMBERS });
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT} 번에서 실행 중입니다.`);
});
