casper.test.begin('Basic page tests', 3, function suite(test){
	casper.start('http://localhost:8081');
	
	casper.then(function(){
		test.assertTitle("Vanilla.js");
		test.assertExists('#btnNewItem');
		test.assertNotExists('newItemDiv');
	});
	
	casper.run(function(){
		test.done();
	});
});