function Presenter() {

    this.addHandlers = function() {
        console.log("Add handlers");
        getElement('btnNewItem').onclick = displayNewItem;
        getElement('txtNewItem').onkeydown = addNewItemKeyPress;
        getElement('btnAddNewItem').onclick = addNewItem;
    }

    function displayNewItem() {
        console.log("New item clicked");
        getElement('newItemDiv').style.visibility = "visible";
        getElement('txtNewItem').focus();
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
        var list = getElement('list');
        var itemText = getElement('txtNewItem').value;
        var newListItem = window.document.createElement("li");

        newListItem.innerHTML = itemText;
        list.appendChild(newListItem);
        hideNewItem();
    }

    function hideNewItem() {
        getElement('txtNewItem').value = "";
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
