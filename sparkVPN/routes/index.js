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

	request({
		url: 'https://api.digitalocean.com/v2/droplets',
		method: 'POST',
		json: {
			name: "example.com",
  			region: "nyc3",
  			size: "512mb",
  			image: "ubuntu-14-04-x64",
  			ssh_keys: null,
  			backups: false,
  			ipv6: true,
  			user_data: null,
  			private_networking: null
		},
		headers: {
			'Authorization': 'Bearer ' + TOKEN
		}
	}, function (error, response, body) {
		
		/*var droplet1 = body.droplet;
		var droplet_id = droplet1.id;

		res.render('index', { title: 'RETRIEVE DROPLET', message: droplet_id});

		setTimeout(function() {request({
			url: 'https://api.digitalocean.com/v2/droplets/' + droplet_id,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + TOKEN
			}
		}, function (inner_error, inner_response, inner_body) {
				var JsonBody = JSON.parse(inner_body);
				var ipv4 = JsonBody.droplet.networks.v4[0].ip_address;
				console.log(ipv4);
		})}, 70000);*/
		res.setHeader('Content-disposition', 'attachment; filename=theDocument.txt');
		res.setHeader('Content-type', 'text/plain');
		res.charset = 'UTF-8';
		res.write("Hello, world");
		res.end();

	})
});
	
module.exports = router;
