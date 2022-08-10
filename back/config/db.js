require('dotenv');
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/shopping_cart_db';

const ConnString = process.env.MONGO_URI || connectionString;

function db_config() {
    mongoose.connect(ConnString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log('connect successfully'))
        .catch((err) => {
            console.log(err);
        });
}

module.exports = db_config;