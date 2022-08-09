const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/shopping_cart_db';


function db_config() {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log('connect successfully'))
        .catch((err) => {
            console.log(err);
        });
}

module.exports = db_config;