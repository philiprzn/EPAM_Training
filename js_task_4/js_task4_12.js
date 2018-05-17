function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    // return Math.floor(Math.random() * (max - min + 1)) + min;   // включая max

}

console.log(getRandomInt(1, 5));
console.log(getRandomInt(1, 8));
