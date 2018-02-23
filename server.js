var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/result", function (req, res) {
    res.sendFile(path.join(__dirname, "result.html"));
});

// Get all reservations/waitlists
app.get("/api/pets", function (req, res) {
    res.json(reservations);
});

app.post("/api/newuser", function (req, res) {
    res.json(waitList);
});