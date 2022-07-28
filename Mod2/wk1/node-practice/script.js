/*const fs = require('fs');
console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
}); */

const request = require('request');
request(
	'http://jsonplaceholder.typicode.com/users',
	function(err, res, body) {
		console.log(body);
	}
);