const mongoose = require('mongoose');

let navheadSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    title: String,
    description: String,
    url: String,
    tags: String
});

module.exports = mongoose.model('tb_navheads', navheadSchema);