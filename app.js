// @ts-check

const express = require("express");

const mainRouter = require("./routes/main");
const userRouter = require("./routes/users");

const app = express();

const PORT = 7000;

// ejs setting
app.set("view engine", "ejs");

// router setting
app.use("/", mainRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`${PORT} 포트에서 서버 실행 중`);
});
