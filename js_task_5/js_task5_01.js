calculator ={
    result : 0,

    add : function (num1){
        var that = this;

        this.result += num1;
        return function (b) {
            that.result += b
        };
    },

    substract : function (num1) {
        return this.result -= num1
    },
    divide : function (num1) {
        return this.result /= num1
    },
    multiply : function (num1) {
        return this.result *= num1
    },
    getResult : function () {
        return this.result;
    },
    reset : function () {
        return this.result = 0;
    }
};


calculator.add(3)(2);
// calculator.add(3);
calculator.multiply(3);
console.log(calculator.getResult());





// add : function (num1){
//         // return function (num2){
//         //     return this.result = num1 + num2
//         // };
//     return this.result += num1;
// },

// add : function (num1) {
//     return function (num) {
//         return this.result = num1 + num;
//     };
// },


//     var f = function (a,b){
//         return function(c){
//             return a+c;
//         }
//     }
//     var newF = f(2);
// newF(2); // 4

