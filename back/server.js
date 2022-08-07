const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const route = require('./routes/routes');


app.use(bodyParser.json());

app.use('/', route);

app.listen(5001, () => {
    console.log('running on port 5001');
})
mongoose.connect('mongodb://localhost/shopping_cart_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('connect successfully'))
    .catch((err) => {
        console.log(err);
    });




