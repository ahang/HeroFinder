//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

// Dependencies
// =====================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =====================================================
// Setting up Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =====================================================

