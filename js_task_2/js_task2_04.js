var arr =[3, 3, 3, 3]

function isEqual(arg) {
    var arLngt = arg.length;

    for (var i = 0; i < arLngt-1; i++) {

        for (var j = i+1; j < arLngt; j++) {
            if (arg[i] !== arg[j]) return false;
        }
    }
    return true;

};


console.log(isEqual(arr));


/////////////////////////////// var 2:
///////////////////////// js_task2_04:

// var arr=[1, 1, 1, 1];
//
// var newArr = arr.filter(function (item) {
//    return arr[item] === arr[0];
// });
//
// if (arr.length === newArr.length){
//     console.log(true);
// } else (console.log(false));

// console.log(newArr);