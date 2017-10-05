// Dependencies
const express = require('express');
const mysql = require('mysql');

// Setup Router
// ====================================
var router = express.Router();
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tasksDB"
});


// Middleware
// ====================================
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

connection.on("error", function(err){
    console.log(err.code);
});

connection.connect(function(err) {
    console.log("connected as id " + connection.threadId);
});


// Routing
// ======================================
router.get('/', function (req, res) {
    // connection.query('SELECT * FROM tasks', function(err, data){
        res.render('index');        
    // });
});

router.post('/', function (req, res) {

    // TO DO: Wrap redirect in a query
    res.redirect('/');
})

module.exports = router;