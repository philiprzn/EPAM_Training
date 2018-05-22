function Calculator() {
    this.result = 0;

    this.add = function (num1) {
        this.result += num1;
        return this;
    };
    this.substract = function (num1) {
        this.result -= num1
        return this;
    };
    this.divide = function (num1) {
        this.result /= num1
        return this;
    };
    this.multiply = function (num1) {
        this.result *= num1
        return this;
    };
    this.getResult = function () {
        return this.result;
    };
    this.reset = function () {
        this.result = 0;
        return this;
    }

    this.getInitialState = function () {
        setTimeout(function () {
            console.log (this);
            this.result = 5;
        }.bind(this), 1000)
    }
}

var calc = new Calculator();



