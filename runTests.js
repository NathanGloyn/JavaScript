var child_process = require('child_process');
var Spooky = require('spooky');

var server = child_process.exec('node createServer.js',function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

var tests = [
	'tests/basic_Page_Tests.js', 
	'tests/displays_add_item.js', 
	'tests/escape_hides_newItem.js'];

var casperCommand = 'casperjs test ' + tests.join(" ");	
	
var casper = child_process.exec(casperCommand,function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

process.on('exit', function(){
	server.kill();
	casper.kill();
});
