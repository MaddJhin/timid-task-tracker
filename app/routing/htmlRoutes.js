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
    res.render('index');
});

module.exports = router;