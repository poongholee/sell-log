const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
});

global.User = global.User || mongoose.model('User', UserSchema);
module.exports = global.User;