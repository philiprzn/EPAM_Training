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
function Private(name = 'BMW', seats = 4, fuel = 'gasoline') {
    Transport.apply(this, arguments);
    this.fuel = fuel;
    this.seats = seats;
}
Private.prototype = Object.create(Transport.prototype); // Наследуем от Transport
Private.prototype.constructor = Private; // Сохраняем конструктор
Private.prototype.travel = function () {
    console.log('You can go anywhere U want, but U need to feed me with ' + this.fuel);
};


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
var car = new Private('Nissan', 6, 'diesel');