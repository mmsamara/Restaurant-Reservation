//Require Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 3000;

//Set up Express to handle data parsing
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Reservations
var reservations = [];

var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});