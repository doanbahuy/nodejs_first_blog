const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    passWord: { type: String, required: true }
},{
    timestamps: true,
});


module.exports = mongoose.model('User', User);