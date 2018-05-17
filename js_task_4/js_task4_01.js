function trimSpasces(string) {

    // return string.replace(/^\s+|\s+$/g, "");
    // return string.replace(/(^\s+|\s+$)/g, '');
    return string.trim();
}

console.log(trimSpasces('     Метод trim() возвращает строку с вырезанными пробельными символами с её концов.   '));