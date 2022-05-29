const mongoose = require('mongoose');

let navLogoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    img: String,
    url: String
});

module.exports = mongoose.model('tb_navlogo', navLogoSchema);