const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eduwork-mongoose", {});
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Database connected");
});
