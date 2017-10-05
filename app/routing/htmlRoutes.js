// Dependencies
const express = require('express');

// Setup Router
// ====================================
var router = express.Router();

// Timestamp
// ====================================
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// Routing
// ======================================
router.get('/', function (req, res) {
    // TO DO: wrap render in a query
    res.render('index');
});

router.post('/', function (req, res) {

    // TO DO: Wrap redirect in a query
    res.redirect('/');
})

module.exports = router;