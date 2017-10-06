// Dependencies
const express = require('express');
const mysql = require('mysql');


// Setup Router
// ====================================
var router = express.Router();
var connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tasksDB"
    });
}

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
    connection.query('SELECT * FROM tasks', function(err, data){
        console.log(data);
        res.render('index', {tasks: data});        
    });
});

router.post('/', function (req, res) {
    connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(error, data){
        res.redirect('/');            
    });
});

router.post("/todo/:id", function (req, res) {
    console.log("Updating task " + req.params.id + " with "+ req.body.task);
    connection.query("UPDATE tasks SET task = ? WHERE id = ?", [req.body.task, req.params.id], function(error, data){
        res.redirect('/');                    
    });
});


router.delete("/todo/:id", function (req, res) {
    console.log(req.params.id);
    connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id], function(error, data){
    });
});

module.exports = router;