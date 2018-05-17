function uppFL(str) {

    var arr = str.split(' ');
    var result = [];

    arr.map(function (item, i) {
        item = item[0].toUpperCase() + item.slice(1);
        result.push(item)

        // console.log(item);
        // console.log(item[0].toUpperCase());
    });

    newStr = result.join(' ');

    return newStr;
}


console.log(uppFL('i am cool'));


//////////////////////////////////////////var 2

function appFL2(str) {
    for (var a = str, b = "", i = 0; i < a.length; i++) {
        b += " " != a[i] ? i && " " != a[i - 1] ? a[i] : a[i].toUpperCase() : " ";
    }
    return b
}


console.log(appFL2("JavaScript is a good language"));