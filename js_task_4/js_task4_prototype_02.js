function Animal(name) {
    this.name = name;
    this.canWalk = true;
    this.greeting = function () {
        console.log("Hi! My name is " + this.name);
    }
}

var cat = new Animal("Mr. Cat");
cat.greeting();

console.log(cat);