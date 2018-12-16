const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
});

UserSchema.methods.generateHash = function(password) {
    return bcryptjs.hashSync(password, 0);
}

UserSchema.methods.validateHash = function(password) {
    return bcryptjs.compareSync(password, this.password);
}

global.User = global.User || mongoose.model('User', UserSchema);
module.exports = global.User;