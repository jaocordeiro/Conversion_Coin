const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.get("/", (req, res) => {
    res.send("WebServer Running :D Ciapetro");
});


require("./routes/history");

app.listen(3355);

