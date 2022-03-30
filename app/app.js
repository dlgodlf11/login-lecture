const express = require("express");
const app = express();


//라우팅
const home = require("./src/routes/home");



//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //use = 미들웨어 등록 메서드



module.exports = app;


