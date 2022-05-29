const mongoose = require('mongoose');

let introSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    intro: String
});

module.exports = mongoose.model('tb_intro', introSchema);