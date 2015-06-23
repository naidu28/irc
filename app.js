var http = require('http');

var server = http.createServer(function(req, res) {
	var urljson = require('url').parse(req.url, true);
	res.write(urljson.href);
	res.end();
}); server.listen(80);

server.close();