const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    createdAt: { type: Date, default: new Date() }
});

global.Order = global.Order || mongoose.model('Order', OrderSchema);
module.exports = global.Order;