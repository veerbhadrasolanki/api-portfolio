const mongoose = require('mongoose');

let greetingsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    message: String
});

module.exports = mongoose.model('tb_greeting', greetingsSchema);