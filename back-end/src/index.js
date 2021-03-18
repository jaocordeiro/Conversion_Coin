const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);
app.use(cors())

app.get("/", (req, res) => {
    res.send("WebServer Running :D Ciapetro");
});


require("./controller/history");

app.listen(3355);

