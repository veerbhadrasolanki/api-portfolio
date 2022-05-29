// Load express module
const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const route_navheads = require('./routes/route_navheads');
const route_navlogo = require('./routes/route_navlogo');
const route_greeting = require('./routes/route_greeting');
const route_intro = require('./routes/route_intro');
// Initialize app
const app = express();

// Mongoose connection

mongoose.connect('mongodb+srv://veerbhadrasolanki:OcLPmA6ridURiY3W@cluster0.snegw.mongodb.net/Portfolio'
);
const db = mongoose.connection;

// Start server with port 8081
app.listen(8081, function(){
    console.log("Server started on localhost:8081");
});

// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});


app.use('/navheads', route_navheads);
app.use('/navlogo', route_navlogo);
app.use('/greeting', route_greeting);
app.use('/intro', route_intro);
app.use('/',function(req, res){
    res.send('Not Working!!!');
});