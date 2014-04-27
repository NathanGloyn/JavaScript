casper.test.begin('Displays add item when new item clicked', 1, function suite(test){

	casper.start('http://localhost:8081');
	
	casper.then(function(){
		this.click('#btnNewItem');
		test.assertExists('#newItemDiv');
	});

	casper.run(function(){
		test.done();
	});	
	
});