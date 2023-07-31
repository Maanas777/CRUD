const mongoose = require("mongoose");

const connectDB = mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD")
  .then(() => {
    console.log("connected CRUD");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectDB;
