// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hdb = require("express-handlebars");
const htmlRoutes = require('./app/routing/htmlRoutes');

// App Setup
// ======================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/public'));

// Set Handlebars as the default templating engine
// =======================================================
app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing
// =======================================================
app.use('/', htmlRoutes);

// Start Server
// =======================================================
app.listen(PORT, function () {
    console.log("Server Listening on Port: " + PORT);
});