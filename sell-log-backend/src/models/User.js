const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
});

global.User = global.User || mongoose.model('User', UserSchema);
module.exports = global.User;