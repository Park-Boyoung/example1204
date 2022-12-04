const express = require("express");

const app = express();

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});
