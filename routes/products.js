const express = require('express');
const Product = require('../models/Product');

const router = express.Router();


// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch products from MongoDB
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch products', error: err.message });
    }
});
router.post('/', async (req, res) => {
    const { id, title, disc, image, price, discount, rating, category } = req.body;
    console.log(req.body);  // Log the request body to check the data being sent

    try {
        const newProduct = new Product({ id, title, disc, image, price, discount, rating, category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error saving product:", error);  // Log error for debugging
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
});



// Update product
router.put('/:id', async (req, res) => {
    const { id, title, disc, image, price, discount, rating, category } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { id, title, disc, image, price, discount, rating, category },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
});

module.exports = router;

