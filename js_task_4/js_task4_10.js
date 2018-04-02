function roundSum(num1, num2) {
    var n1 = +num1, n2 = + num2;

    var sum = n1 + n2;

    // console.log(sum.toFixed(3));
    console.log(typeof  sum);

    return sum.toFixed(3);
};


console.log(roundSum('3.455', '4.55'));
console.log(roundSum(3.455, 4.55));