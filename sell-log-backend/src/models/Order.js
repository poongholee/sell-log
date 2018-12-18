const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    createdAt: { type: Date, default: Date.now }
});

global.Order = global.Order || mongoose.model('Order', OrderSchema);
module.exports = global.Order;