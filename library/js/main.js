
// ///////////  Popup \\\\\\\\\\\

var popup = document.getElementById('popup')
function appearance() {
    popup.style.display="block";
};
function disappearance() {
    popup.style.display="none";
}

var books = document.getElementsByClassName('book__item');
var library = document.querySelector('.book__list');
var searchInp = document.querySelector('.search__input');

searchInp.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        console.log(searchInp.value.toUpperCase());
        search();
    }
});

function search() {
    console.log('cick  here!');
}

// library.innerHTML = '';

// console.log(books);
// console.log(books[1].innerHTML);
book = books[1].outerHTML;
book2 = books[2].outerHTML;
// console.log(library = books[1].outerHTML);
// console.log(library.innerHTML = book + book2);
console.log(books[1].textContent.toUpperCase());

var text = '';
for ( var i = 0; i < books.length; i++) {
    text += books[i].innerText.toUpperCase()
}
console.log(text);




