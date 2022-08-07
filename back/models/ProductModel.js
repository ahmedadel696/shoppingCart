
const mongoose = require('mongoose');
const ProductSchema = require('../schemas/ProductSchema');


const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;