module.exports = app => {
  const history = require("../controllers/history.js");
  app.get("/listCoins", history.listCoins);
  app.post("/convert", history.convert);
  app.get("/listByUser/:userId", history.listByUser);
  app.get("/detail/:historyId", history.findOne)
};