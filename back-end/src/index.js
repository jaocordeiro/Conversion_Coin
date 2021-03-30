const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userController = require("./controller/users");
const historyController = require("./controller/history");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("WebServer Running :D Ciapetro");
});

app.post("/signin", userController.signin);
app.post("/signup", userController.signup);
app.get("/listcoins", historyController.listCoins);
app.post("/live", historyController.live);
//app.get("/listByUser/:userId", historyController.listByUser);
//app.get("/detail/:historyId", historyController.findOne);

app.listen(3333);
