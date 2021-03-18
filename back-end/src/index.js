const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.get('/', (req, res) => {
	res.send('Working!');
});

require("./controller/history");

app.listen(3000)