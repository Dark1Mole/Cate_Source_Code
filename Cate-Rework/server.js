//This is used for get your url of hosting, just copy it and connect it to an uptime website. Well, you can use uptimerobot as example for 14/7 hosting.
const express = require('express');

const server = express();

server.all('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');

	res.write(
		'<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>'
	);

	res.end();
});

function keepAlive() {
	server.listen(3000, () => {
		console.log('Server running!');
	});
}


module.exports = keepAlive;
