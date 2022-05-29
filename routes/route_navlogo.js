const express = require('express');
// Initialize app
const router = express.Router();
const navLogo = require('../models/navLogo');
router.get('/', function (req, res) {
    let navlogo = navLogo.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

module.exports = router;