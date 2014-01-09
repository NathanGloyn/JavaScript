function setUp() {

    addHandlers();

    function addHandlers() {
        console.log("Add handlers");
        window.document.getElementById('btnNewItem').onclick = displayNewItem;
        window.document.getElementById('newItem').onkeydown = addNewItemKeyPress;
        window.document.getElementById('btnAddNewItem').onclick = addNewItem;
    }

    function displayNewItem() {
        console.log("New item clicked");
        window.document.getElementById('newItemDiv').style.visibility = "visible";
    }

    function addNewItemKeyPress(event) {
        if (event.keyCode == 13) {
            addNewItem(event);
        }
    }

    function addNewItem(event) {
        window.document.getElementById('newItemDiv').style.visibility = "hidden";
    }
}


function List() {
    this.items = [];

    displayAddItem = function (e) {

    }

    this.addItem = function (text) {
        items.add(new ListItem(text));
    }


}

function ListItem(text) {
    this.text = text;
}
