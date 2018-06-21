var http = require('http');

var server = http.createServer(function(request, response) {
	if(request.url != '/favicon.ico') {
		console.log('got a request ' + hits)
		const { method, url } = request;
		const { headers } = request;
		const userAgent = headers['user-agent'];

		response.write('hi');
		response.end();
    }
	
});

server.listen(3000);