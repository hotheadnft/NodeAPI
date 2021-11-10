
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
module.exports = app
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

