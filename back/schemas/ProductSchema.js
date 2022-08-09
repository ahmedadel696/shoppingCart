
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String,
    sizes: [String]
});

module.exports = ProductSchema;

