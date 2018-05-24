var books;
var data;

function loadBooks() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/books.json', true);

    xhr.setRequestHeader('Content-Type', 'application/json;');
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                books = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showBooks(books);
        }
    };
    xhr.send();
}

function showBooks(books) {
    var number = 1,
        table = document.getElementById('table');

    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    books.forEach(function (book){

        var bookName = book.name;
        var bookAuthor = book.author;
        var bookGenre = book.genre;
        var bookYear = book.year;

        var tableBody = table.querySelector('tbody');
        // var tableBody = document.getElementById('table').getElementsByTagName('TBODY')[0];
        var row = document.createElement('tr');

        tableBody.appendChild(row);

        var td1 = document.createElement("td");
        td1.className = 'numTD';
        var td2 = document.createElement("td");
        td2.className = 'authorTD';
        var td3 = document.createElement("td");
        td3.className = 'nameTD';
        var td4 = document.createElement("td");
        td4.className = 'genreTD';
        var td5 = document.createElement("td");
        td5.className = 'yearTD';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        td1.innerHTML = number++;
        td2.innerHTML = bookName;
        td3.innerHTML = bookAuthor;
        td4.innerHTML = bookGenre;
        td5.innerHTML = bookYear;

    });
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
};

function closePopup() {
    document.getElementById("popup").style.display = "none";
};

function addBook() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/books.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;');
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                console.log('Book added');
            } catch (e) {
                alert("Error :" + e.message);
            }
        }
    }
    xhr.send();

    var newBook = {};
    var newBookName = document.getElementById('book-title').value;
    var newBookAuthor = document.getElementById('book-author').value;
    var newBookGenre = document.getElementById('book-genre').value;
    var newBookYear = document.getElementById('book-year').value;


    if (!newBookName || !newBookAuthor || !newBookGenre || !newBookYear) {
        alert("Все поля формы обязательны к заполнению!!!");
        return;
    }

    newBook.name = newBookName;
    newBook.author = newBookAuthor;
    newBook.genre = newBookGenre;
    newBook.year = newBookYear;

    books.push(newBook);

    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-genre').value = "";
    document.getElementById('book-year').value = "";

    data = JSON.stringify(books);
    // console.log(data);

    var xhrPost = new XMLHttpRequest();
    xhrPost.open('POST', 'books.json', true);
    xhrPost.setRequestHeader('Content-Type', 'application/json;');
    xhrPost.send(data);
    xhrPost.onreadystatechange = function() {
        if (xhrPost.readyState != 4) return;
        if (xhrPost.status != 200) {
            alert(xhrPost.status + ': ' + xhrPost.statusText);
        } else {
            try {
                console.log('Book add');
            } catch (e) {
                alert("Error : " + e.message);
            }
        }
    }
    showBooks(books);

    document.getElementById('popup').style.display = 'none';
}
