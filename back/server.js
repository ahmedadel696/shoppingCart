const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routers = require('./routes/routes');
const db_config = require('./config/db')

app.use(bodyParser.json());

app.use('/', routers);

app.listen(5001, () => {
    console.log('running on port 5001');
})

db_config();





