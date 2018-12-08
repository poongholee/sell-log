const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountRate: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
});

global.Product = global.Product || mongoose.model('Product', ProductSchema);
module.exports = global.Product;