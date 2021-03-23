const axios = require('axios');
const History = require ('../model/history')
const keyCurrency = require('./config/keyCurrency')

function saveHistory(history, res) {
	History.create(history, (err, data) => {
		if (err) {
	      res.status(500).send({
	        message:
	          err.message || "Erro ao criar histórico de pesquisa."
	      });
	    }
	});
}

exports.listCoins = (req, res) => {
  	const url = `http://api.currencylayer.com/list?access_key=${keyCurrency.KEY}`
  	console.log(url);
  	axios({
        method:'get',
        url,
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

exports.listByUser = (req, res) => {
	if (!req.params || !req.params.userId) {
		res.status(400).send({
      		message: "Código do usuário não foi informado"
    	});
	}
	History.findByUserId(req.params.userId, (err, data) => {
		if (err) {
    		if (err.kind === "not_found") {
        		res.status(404).send({
          			message: `Nenhum histórico de pesquisa foi encontrado.`
        		});
          		return;
   	  		}

	  	    res.status(500).send({
	  	      	message: "Erro ao buscar o histórico do usuário " + req.params.userId
	  	    });
	  	    return;
    	}
      	res.send(data);
	})
}

exports.findOne = (req, res) => {
	if (!req.params || !req.params.historyId) {
		res.status(400).send({
      		message: "Código não informado"
    	});
	}
	History.findOne(req.params.historyId, (err, data) => {
		if (err) {
    		if (err.kind === "not_found") {
        		res.status(404).send({
          			message: `Nenhum histórico de pesquisa encontrado com esse id ${req.params.historyId}.`
        		});
          		return;
   	  		}

	  	    res.status(500).send({
	  	      	message: "Erro ao buscar o histórico com id " + req.params.historyId
	  	    });
	      	return;
    	}
    	res.send(data);
	});
}

exports.convert = (req, res) => {
	if (!req.body) {
    	res.status(400).send({
      		message: "Requisição sem conteúdo!"
    	});
    	return;
  	}
  	const sourceCoin = req.body.source;
	const destinyCoin = req.body.destiny;
	const valueToConvert = req.body.valueToConvert;  
  	console.log(destinyCoin);
  	const { userId } = req.body
  	const url = `http://api.currencylayer.com/live?access_key=${keyCurrency.KEY}&` +
  				`currencies=${destinyCoin}`
  	axios({
        method:'get',
        url,
    })
    .then(function (response) {
    	console.log(response.data);
    	if (!response.data.quotes) {
    		throw ""
    	}
		const conversionValue = response.data.quotes[sourceCoin + destinyCoin] * valueToConvert;
        saveHistory({
        	user_id: userId,
        	source_coin: sourceCoin,
			destiny_coin: destinyCoin,
			value_to_convert: valueToConvert,
			conversion_value: conversionValue,
        }, res);
        res.send({
			success: true,
			conversionValue: String(conversionValue)
		});
    })
    .catch(function (error) {
        console.log(error);
        res.send(JSON.stringify(error));
    });
}

