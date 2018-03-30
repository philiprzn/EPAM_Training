function reverseStr(str) {
    if (typeof str === "string") return str.split("").reverse().join("");
}

console.log(reverseStr('string 123'));