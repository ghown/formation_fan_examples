(function() {
	'use strict';

	var express = require('express'); // charge ExpressJS
	var serveIndex = require('serve-index');

	var app = express();

	app.use('/ws/', function(req, res, next) {
		console.log('req.url wait for 2s', req.url);
		setTimeout(function() {
			next();
		}, 2000);
	});
	
	app.use(express.static('.'));
	app.use(serveIndex('.', {icons: true}));

	app.use(function(req, res, next) {
		console.log('404: Page not Found', req.url);
		next();
	});

	app.listen(8000, function() {
		console.log('server started on port 8000');
	});
})();
