require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routers = require('./routes/routes');
const db_config = require('./config/db')
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

console.log(process.env.NOODE_ENV)
app.use('/', routers);

app.listen(PORT, () => {
    console.log('running on port 5001');
})

db_config();

if (process.env.NOODE_ENV === "production") {
    app.use("/", express.static("public"));
    app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
} else {
    app.get("/", (req, res) => res.send("API RUNNING..."));
}





