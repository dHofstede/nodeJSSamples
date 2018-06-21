/*var http = require('http');

var server = http.createServer(function(request, response) {
	if(request.url != '/favicon.ico') {
		let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

		  //cleaning the room
		  let isClean = false;

		  const newObject = {name: 'promise returned object', value: 4}

		  if (isClean) {
		    resolve('Clean');
		  } else {
		    reject(newObject);
		  }
		});

		promiseToCleanTheRoom.then(function(fromResolve) {
		  console.log('the room is' + fromResolve);
		}).catch(function(fromReject){
			console.log(fromReject.name + (fromReject.value+2));
		})

		response.write('hi');
		response.end();
    }
	
});

server.listen(3000);*/

var http = require('http');

var server = http.createServer(function(request, response) {
	if(request.url != '/favicon.ico') {
		let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

		  //cleaning the room
		  let isClean = false;

		  const resolvedObject = {name: 'promise suceeded', value: 5}
		  const rejectedObject = {name: 'promise failed', value: 4}

		  if (isClean) {
		    resolve(resolvedObject);
		  } else {
		    reject(rejectedObject);
		  }
		});

		promiseToCleanTheRoom.then(function(result) {
		  console.log(result.name + ', value = ' + (result.value + 2));
		}).catch(function(result){
			console.log(result.name + ', value = ' + (result.value + 2));
		})

		response.write('hi');
		response.end();
    }
	
});

server.listen(3000);