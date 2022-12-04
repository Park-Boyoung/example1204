const express = require("express");
const client = require("./mongoConnect");

const router = express.Router();

async function mail() {
  await client.connect();
  const user = client.db("kdt4").collection("user");
  client.close();
}

main();
