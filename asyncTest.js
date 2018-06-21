var http = require('http');

let hits = 0;

var server = http.createServer(function(request, response) {
	if(request.url != '/favicon.ico') {
		hits++;
		setTimeout(function() {console.log('got a request ' + hits);}, 3000);

		response.write('hi');
		response.end();
    }
	
});

server.listen(3000);