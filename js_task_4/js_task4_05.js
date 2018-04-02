function trimSentence(str, numb) {

    if (typeof numb !== "number" || typeof str !== "string" ) return "Enter correct argument!";

    if(str.length > numb && numb >= 3){
        return str.slice(0, numb - 3 ) + "..."
    } else if (str.length > numb){
        return str.slice(0, numb - 1 ) + "..."
    }

    return str;
}



console.log(trimSentence('abcdefghij', '2'));
console.log(trimSentence(1, 2));
console.log(trimSentence('abcdefghij', 2));
console.log(trimSentence('abcdefghij', 3));
console.log(trimSentence('abcdefghij', 4));
console.log(trimSentence('abcdefghij', 5));
console.log(trimSentence('abcdefghij', 6));