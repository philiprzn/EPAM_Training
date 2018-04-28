// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Transport(name) {
    this.name = name;
    this.seats = 2;
}

Transport.prototype.carry = function () {
    console.log('I am the ' + this.name + " !" + " I can carry " + this.seats + " citizen/s" );
};


// --------- Класс-потомок от Transport -----------
function Social() {
    this.price = "3$";
    Transport.apply(this, arguments);
}
Social.prototype = Object.create(Transport.prototype); // Наследуем от Transport
Social.prototype.constructor = Social; // Сохраняем конструктор
Social.prototype.payment = function () {
    console.log('You should pay for the fare ' + this.price + ' !');
};


// --------- Класс-потомок от Transport -----------
function Private() {
    Transport.apply(this, arguments);
}
Private.prototype = Object.create(Transport.prototype); // Наследуем от Transport
Private.prototype.constructor = Private; // Сохраняем конструктор



// --------- Класс-потомок от Social -----------

function Ecologic(name, passaners) {
    Social.apply(this, arguments);
    this.seats = passaners;
}
Ecologic.prototype = Object.create(Social.prototype); // Наследуем от Social
Ecologic.prototype.constructor = Ecologic;
Ecologic.prototype.gasless = function () {
    console.log('I can transport citizens without consuming fuel.');
};

var trolleybus = new Ecologic('Троллейбус № 3', 80);