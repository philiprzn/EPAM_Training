function countLet(str) {

    var arr = str.split('');
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (result[elem] != undefined)
            result[elem]++;
        else
            result[elem] = 1;
    }
    for (var key in result)
        console.log(key + ' = ' + result[key] + ' раз(а)');
}

countLet('ababxacddseee');
console.log('--------------');
countLet('abbac');