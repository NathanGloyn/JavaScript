function Presenter() {

    var listCount = 0;

    this.addHandlers = function() {
        console.log("Add handlers");
        getElement('btnNewItem').onclick = displayNewItem;
        getElement('txtNewItem').onkeyup = addNewItemKeyPress;
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

        list.appendChild(createListItemDOM(itemText));
        hideNewItem();
    }

    function hideNewItem() {
        getElement('txtNewItem').value = "";
        getElement('newItemDiv').style.visibility = "hidden";
    }

    function getElement(elementId) {
        return window.document.getElementById(elementId);
    }

    function createListItemDOM(itemText) {
        var newListItem = createElement("li");
        var containingSpan = createElement("span");
        var checkbox = createElement("input");
        checkbox.setAttribute("type", "checkbox");
        listCount++;
        checkbox.setAttribute("id", "item" + listCount);
        var label = createElement("label");
        label.setAttribute("for", "item" + listCount);
        label.innerHTML = itemText;

        containingSpan.appendChild(checkbox);
        containingSpan.appendChild(label)
        newListItem.appendChild(containingSpan);

        return newListItem;
    }

    function createElement(tag) {
        return window.document.createElement(tag);
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
