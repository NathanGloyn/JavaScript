casper.test.begin('Hides item when escape pressed', 2, function suite(test){

	casper.start('http://localhost:8081', function(){
		this.click('#btnNewItem');
		test.assertExists('#newItemDiv');
	});
	
	casper.then(function(){
		this.sendKeys('#txtNewItem', casper.page.event.key.Escape , {keepFocus: true});
	});

	casper.then(function(){
		test.assertNotVisible('#newItemDiv');
	});
	
	casper.run(function(){
		test.done();
	});	
	
});