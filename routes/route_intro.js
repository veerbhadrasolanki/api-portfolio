const express = require('express');
// Initialize app
const router = express.Router();
const intro = require('../models/intro');
router.get('/', function (req, res) {
    intro.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

module.exports = router;