//////////////////////////////////////////// js_task2_05:

var numArr = [1, 83, 76];

function getMaxOfArray(numArray) {
    var max = Math.max.apply(null, numArray)
    return ('Максимальное значение ' + max) ;
}

console.log(getMaxOfArray(numArr));

//////////////////////////////////////////// js_task2_05_v2:

// var numArr = [1, 83, 76, 522, -25, 8452];
//
//
//
// min = numArr[0];
// max = min;
//
// numArr.forEach(function (item, i) {
//     // console.log(item);
//     if (numArr[i] > max) max = numArr[i];
//     if (numArr[i] < min) min = numArr[i];
// });
//
// console.log(numArr);
// console.log('Максимальное значение массива: ' + max);
// console.log('Минимальное значение массива: ' + min);