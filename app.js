// @ts-check

const express = require("express");

const indexRouter = require("./routes");
const usersRouter = require("./routes/users");

const app = express();

const PORT = 7000;

// ejs setting
app.set("view engine", "ejs");

// router setting
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버 실행 중`);
});
