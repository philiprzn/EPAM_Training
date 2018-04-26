var  block = document.createElement("div");
block.innerHTML = "<b> Insert first </b>";
block.className = "block";

var  block2 = document.createElement("div");
block2.innerHTML = "<b> Insert second </b>";
block2.className = "block2";

// // вар.1 для вставки в <body>
// function prepend(where, what) {
//      where.insertBefore(what, where.firstChild);
// }
// prepend(document.body, block);


//Будем считать что вставить элемент нам надо не в body,
// а в какой-то произвольный элемент.

function prepend(where, what) {
    var insertWhere = document.querySelector(where);
    insertWhere.insertBefore(what, insertWhere.firstChild);
}

prepend("#container", block);
prepend(".container", block2);