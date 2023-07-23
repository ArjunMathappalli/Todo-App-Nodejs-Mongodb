const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connected to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middleware settings

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//route setting
app.use(require("./routes/index"))
app.use(require("./routes/todo"))



//server config
app.listen(3000, () => console.log("Server started"));
