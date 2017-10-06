const con = require('./connection.js');

function GetTasks(){
    con.query('SELECT * FROM tasks', function(err, data){
        console.log(data);
        res.render('index', {tasks: data});        
    });
}

module.exports = con;