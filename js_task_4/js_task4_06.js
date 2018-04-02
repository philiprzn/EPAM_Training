function toCamelCase(str) {
    lowStr = str.toLowerCase();

    lowStr = lowStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');

    return  lowStr;
}

console.log(toCamelCase('Great coDe Current String'));
console.log(toCamelCase('Great coDe CurRRent sTring'));