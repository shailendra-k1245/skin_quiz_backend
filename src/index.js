const express = require('express');
const app = express();
app.use(express.json());
app.set("view engine","ejs")
app.use(express.static("public"));
const quiz1Controller = require('./controllers/quiz1.controller');
const quiz2Controller = require('./controllers/quiz2.controller');



app.use("/quiz1",quiz1Controller);
app.use("/quiz2",quiz2Controller);

module.exports = app; 