const mongoose = require('mongoose');

const { Schema } = mongoose;

const CartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, refs: 'User' },
    productId: { type: Schema.Types.ObjectId, refs: 'Product' },
    createdAt: { type: Date, default: Date.now }
});

global.Cart = global.Cart || mongoose.model('Cart', CartSchema);
module.exports = global.Cart;