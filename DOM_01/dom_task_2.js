function deleteTextNodes(elem) {
    for (var i = 0; i < elem.childNodes.length; i++) {
             var childElem = elem.childNodes[i];

        if (childElem.nodeType == 3) {
            elem.removeChild(elem.childNodes[i]);
            i--;
        }
        if (childElem.nodeType == 1) {
            deleteTextNodes(childElem);
        }
    }
}

// deleteTextNodes(document.body);
deleteTextNodes(document.querySelector('#container'));
deleteTextNodes(document.querySelector('.container'));

