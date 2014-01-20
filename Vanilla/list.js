(function Presenter(document) {

    var listCount = 0;

    var list = getElement('list'),
        newItemBtn = getElement('btnNewItem'),
        newItemDiv = getElement('newItemDiv'),
        newItemTxt = getElement('txtNewItem');

    document.addEventListener("DOMContentLoaded", function () {
        addHandlers();
    }, false);

    function addHandlers () {
        console.log("Add handlers");
        document.querySelector('body').addEventListener('keyup', cancelEntry, false);

        newItemBtn.addEventListener('click', displayNewItem, false);
        newItemTxt.addEventListener('keyup', addItemKeyPress, false);

        getElement('btnAddNewItem').addEventListener('click', addNewItem, false);
    }

    function displayNewItem() {
        console.log("New item clicked");
        newItemDiv.style.visibility = "visible";
        newItemBtn.style.visibility = "hidden";
        newItemTxt.focus();
    }

    function addItemKeyPress(event) {
        if (event.keyCode == 13) {
            addNewItem(event);
        }
    }

    function addNewItem() {
        var itemText = newItemTxt.value;
        if (itemText) {
            console.log("Create new list item");
            list.appendChild(createListItemDOM(itemText));
            hideNewItem();
        }
    }

    function cancelEntry(event) {
        if (event.keyCode === 27) {
            hideNewItem();
            event.preventDefault();
            event.stopPropagation();
        }
    }

    function hideNewItem() {
        console.log("Hide new item entry");
        newItemTxt.value = "";
        newItemDiv.style.visibility = "hidden";
        newItemBtn.style.visibility = "visible";
        newItemBtn.focus();
    }

    function getElement(elementId) {
        return document.getElementById(elementId);
    }

    function createListItemDOM(itemText) {
        var newListItem = createElement("li");

        newListItem.innerHTML = "<span><input type='checkbox' id='item" + listCount + "' /><label for='item" + listCount + "'>" + itemText + "</label></span>";

        return newListItem;
    }

    function createElement(tag) {
        return document.createElement(tag);
    }
}(window.document));


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
