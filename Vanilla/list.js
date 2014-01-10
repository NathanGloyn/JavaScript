function Presenter() {

    this.addHandlers = function() {
        console.log("Add handlers");
        getElement('btnNewItem').onclick = displayNewItem;
        getElement('newItem').onkeydown = addNewItemKeyPress;
        getElement('btnAddNewItem').onclick = addNewItem;
    }

    function displayNewItem() {
        console.log("New item clicked");
        getElement('newItemDiv').style.visibility = "visible";
        getElement('newItem').focus();
    }

    function addNewItemKeyPress(event) {
        switch (event.keyCode) {
            case 13:
                addNewItem(event);
                break;
            case 27:
                hideNewItem();
                break;
        }
    }

    function addNewItem(event) {
        hideNewItem();
    }

    function hideNewItem() {
        getElement('newItemDiv').style.visibility = "hidden";
    }

    function getElement(elementId) {
        return window.document.getElementById(elementId);
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
