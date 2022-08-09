const mongoose = require('mongoose');

const OrderSchema = require('../schemas/OrderSchema');

const OrderModel = mongoose.model('orders' , OrderSchema);

module.exports = OrderModel;
