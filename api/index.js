const server = require("./src/app/App");

const { conn } = require("./src/app/Db");

server.listen(server.get("port"), () => {
  console.log("server is running on port " + server.get("port"));
});
conn.sync({ force: false }).then(() => {
  console.log("db is conect");
});
