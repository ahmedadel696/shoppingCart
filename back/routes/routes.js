const express = require('express');

const router = express.Router();

const Product = require('../models/ProductModel');
const Order = require('../models/OrderModel');
//post new product
router.post('/api/saveProduct', async (req, res) => {
    const p = new Product(req.body);
    const saveProduct = await p.save();
    res.send(saveProduct);
});

//post new order
router.post('/api/saveOrder', async (req, res) => {
    const ord = new Order(req.body);
    const saveOrder = await ord.save();
    res.send(saveOrder);
});


//get all products
router.get('/api/getProducts', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

//get all products
router.get('/api/getOrders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});



//get product by id 
router.get('/api/getProductById/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
});

//get product by id 
router.get('/api/getOrderById/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.send(order);
});


//remove product
router.delete('/api/deleteProduct/:id', async (req, res) => {
    const deleteP = await Product.findByIdAndDelete(req.params.id);
    res.send(deleteP);
})

//remove order
router.delete('/api/deleteOrder/:id', async (req, res) => {
    const deleteOrd = await Order.findByIdAndDelete(req.params.id);
    res.send(deleteOrd);
})

module.exports = router;