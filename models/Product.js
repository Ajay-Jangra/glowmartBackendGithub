// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    disc: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    rating: { type: Number, min: 1, max: 5, default: 1 },
    category: { type: String, required: true } // New category field
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
