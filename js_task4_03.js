function hasStr(sentence, reqStr ) {
    var lowSentence = sentence.toLowerCase();
    var lowReqStr = reqStr.toLowerCase();
    if (~lowSentence.indexOf(lowReqStr)) return true;

    return false;
}

console.log(hasStr('I LovE cats', 'cATs'));
console.log(hasStr('I LovE cats', 'loVe'));
console.log(hasStr('I LovE cats', 'asd'));