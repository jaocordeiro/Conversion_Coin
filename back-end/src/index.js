const express = require('express');
<<<<<<< HEAD
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors())

app.get("/", (req, res) => {
    res.send("WebServer Running :D");
});


app.listen(3333);

=======
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
>>>>>>> c9222cc4493e8614b9c5eb678c2850a20fa64394
