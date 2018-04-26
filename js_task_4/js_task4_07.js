function insertStr(str, insStr,  position) {
    var arr = str.split(' ');

    arr.splice(position, 0, insStr);

    var newStr = arr.join(' ');

    return newStr;

    // return str.split(' ').splice(position, 0 ,insStr).join(' ');

}


console.log(insertStr('I am cool !' ,'very very', 2));
