const express = require('express');
// Initialize app
const router = express.Router();
const greeting = require('../models/greeting');
router.get('/', function (req, res) {
    greeting.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

module.exports = router;