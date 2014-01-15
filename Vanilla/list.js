function Presenter(document) {

    var listCount = 0;

    var list = getElement('list'),
        newItemBtn = getElement('btnNewItem'),
        newItemDiv = getElement('newItemDiv'),
        newItemTxt = getElement('txtNewItem');


    this.addHandlers = function() {
        console.log("Add handlers");
        document.getElementsByTagName('body')[0].onkeyup = cancelEntry;
        
        newItemBtn.onclick = displayNewItem;
        newItemTxt.onkeyup = addNewItem;

        getElement('btnAddNewItem').onclick = addNewItem;
    }

    function displayNewItem() {
        console.log("New item clicked");
        newItemDiv.style.visibility = "visible";
        newItemBtn.style.visibility = "hidden";
        newItemTxt.focus();
    }

    function addNewItem(event) {
        if (event.keyCode == 13) {
            var itemText = newItemTxt.value;

            list.appendChild(createListItemDOM(itemText));
            hideNewItem();
            event.preventDefault();
            event.stopPropagation();
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
        newItemTxt.value = "";
        newItemDiv.style.visibility = "hidden";
        newItemBtn.style.visibility = "visible";
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
