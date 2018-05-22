function loadBooks() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'books.json', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var books = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showBooks(books);
        }
    }

    xhr.send();

    button.innerHTML = 'Загружаю...';
    button.disabled = true;
}

function showBooks(books) {

    books.forEach(function(book) {
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = book.name;
    });

}