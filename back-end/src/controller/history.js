const axios = require("axios");
const knex = require("../database/connection");
const keyCurrency = require("../config/keyCurrency");

class HistoryController {
  async listCoins(req, res) {
    try {
      const url = `${keyCurrency.URL}/list${keyCurrency.KEY}`;
      const request = await axios.get(url);
      return res.status(200).json(request.data);
    } catch (err) {
      return res.status(400).json({ status: "Error list coins :/" });
    }
  }

  async live(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ status: "Not body" });
      }

      const destConvert = req.body.dest;
      const valueConvert = req.body.value;
      const url = `${keyCurrency.URL}/live${keyCurrency.KEY}&currencies=${destConvert}`;

      const request = await axios.get(url);

      if (!request.data.quotes) {
        return res.status(400).json({ status: "Invalid request" });
      }
      const sourceConvert = request.data.source;

      const conversion = (
        request.data.quotes[sourceConvert + destConvert] * valueConvert
      ).toFixed(3);

      const saveDb = await knex("history").insert({
        source_coin: sourceConvert,
        dest_coin: destConvert,
        value_to_convert: valueConvert,
        value_convert: conversion,
      });

      return res.status(200).json({ status: "converted", value: conversion });
    } catch (err) {
      return res.status(400).json({ status: "Error convert coins :/" });
    }
  }
}

module.exports = new HistoryController();
