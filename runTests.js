var child_process = require('child_process');
var Spooky = require('spooky');
var stillRunning = true;

var server = child_process.spawn('node', ['createServer.js']);

var tests = [
	'tests/basic_Page_Tests.js', 
	'tests/displays_add_item.js', 
	'tests/escape_hides_newItem.js'];

var casperCommand = 'test ' + tests.join(" ");	
	
var casper = child_process.spawn('casperjs', [casperCommand]);

casper.stdout.on('data', function(data){
	console.log(data.toString());
});

casper.stderr.on('data', function(data){
	console.log('Error: ' + data);
});

casper.on('exit', function(code){
	server.kill();
	process.exit(0);
});