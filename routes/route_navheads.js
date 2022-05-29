const express = require('express');
// Initialize app
const router = express.Router();
const navhead = require('../models/navhead');

router.get('/', function (req, res) {
    let navheads = navhead.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

module.exports = router;