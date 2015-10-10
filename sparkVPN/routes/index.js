var express = require('express');
var request = require('request');
var router = express.Router();
var TOKEN = '21ad0aa08d9d33af5b6ae68edb97b74e6edd18aca1f0ad18b9ea96df5f3a245d';

/* GET home page. */
router.get('/', function(req, res, next) {
  //in the response you'll send back to the router, render some stuff
  res.render('index', { title: 'Express', message: 'Welcome to express' });
});

/*gets called when user clicks 'submit' */
router.post('/', function(req, res) {
		/*request("https://www.google.com", function(error, response, body) {
			console.log("Got response: " + body);
		});*/

	request({
		url: 'https://api.digitalocean.com/v2/droplets',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + TOKEN
		}
	}, function (error, response, body) {
		res.render('index', { title: 'RETRIEVE DROPLET', message: body});
	})


	/*request("https://api.digitalocean.com/v2/droplets", function(error, response, body) {
		res.render('index', { title: 'POST', message: body});
	});*/

});
	
module.exports = router;
