
// var arr = [1, 2, 'abc', ['q', 'w', 't', 11]];
var arr2 = [1, 2, 3, 4, [9, 8, 7]];

function showElems(arg) {
    var arrLength = arg.length;

    arg.forEach(function (item, iter, arr) {
        console.log(item);
    });

    console.log("Число элементов: " + arrLength );
}


showElems(arr2);