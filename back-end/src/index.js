const express = require('express');
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

