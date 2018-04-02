var list = {
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : null
            }
        }
    }
};

function arrayToList(arr) {
    var list;
    for (var i = arr.length -1; i >= 0; i--){
        list = {value : arr[i], next : list}
    }
    return list;
}


function listToArray(list) {
    var arr = [];
    for (var i = list; i ; i = i.next){
        arr.push(i.value);
    }
    return arr;
}

function prepend(val, list) {
    return {val, next : list};
}


function nth(list, val) {
    if (!list) return undefined;
    else if (val == 0) return list.value;
    else return nth(list.next, val - 1);
}



// function arrayToList2(arr) {
//     var list;
//     for (var i = 0; i <= arr.length - 1; i++){
//         list = {value : arr[i], next : list}
//     }
//     return list
// }


// console.log(arrayToList([10, 20, 30]));
// console.log(arrayToList2([10, 20, 30]));

// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30 , 40]), 2));