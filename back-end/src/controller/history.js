const express = require('express');
const axios = require('axios');
const app = express();
const KEY = '9cb29a9221269dc249fef01dbd62e3fc';
const url = `http://api.currencylayer.com/list?access_key=${KEY}`
const url2 = `http://api.currencylayer.com/live?access_key=${KEY}`


app.get('/', (req, res) => {
	res.send('Working!');
});

axios.post(url, {
}, {
  headers: {
	'Authorization': `Basic ${KEY}` 
  }
})
  .then((res) => {
	console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })

  axios.post(url2, {
  }, {
	headers: {
	  'Authorization': `Basic ${KEY}` 
	}
  })
	.then((res) => {
	  console.log(res.data)
	})
	.catch((error) => {
	  console.error(error)
	})
