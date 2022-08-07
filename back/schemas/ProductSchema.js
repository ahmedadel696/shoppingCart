
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    desc: String,
    imageUrl: String,
    sizes: [String]
});

module.exports = ProductSchema;

