const express = require('express');

const router = express.Router();

const Product = require('../models/ProductModel');
//post new product
router.post('/api/saveProduct', async (req, res) => {
    const p = new Product(req.body);
    const saveProduct = await p.save();
    res.send(saveProduct);
});


//get all products
router.get('/api/getProducts', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

//get product by id 
router.get('/api/getProductById/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
});


//remove product
router.delete('/api/deleteProduct/:id', async (req, res) => {
    const deleteP = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteP);
})

module.exports = router;