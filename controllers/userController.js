// @ts-check

const mongoClient = require("./mongoController");

const db = {
  getUsers: async () => {
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    const usersCursor = user.find({});
    const users = await usersCursor.toArray();
    if (!users) throw Error("회원정보 불러오기 오류");

    return users;
  },
};

module.exports = db;
