const sql = require("../database/connection");

const History = function(history) {
	this.user_id = history.user_id;
	this.source_coin = history.source_coin;
	this.destiny_coin = history.destiny_coin;
	this.conversion_value = history.conversion_value;
}

History.create = (newHistory, result) => {
	sql.query("INSERT INTO history SET ?", newHistory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("criado history: ", { id: res.insertId, ...newHistory });
    result(null, { id: res.insertId, ...newHistory });
  });
}

History.findByUserId = (userId, result) => {
	sql.query(`SELECT * FROM history WHERE user_id = ?`, userId, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		if (!res.length) {
			result({ kind: "not_found" }, null);
			return;
		}
		console.log("historys: ", res);
    	result(null, res);
	});
}

History.findOne = (historyId, result) => {
	sql.query(`SELECT * FROM history WHERE id = ${historyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("encontrado history: ", res[0]);
      result(null, res[0])
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

History.getAll = result => {
	sql.query("SELECT * FROM history", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("historys: ", res);
    result(null, res);
  });
}

module.exports = History;