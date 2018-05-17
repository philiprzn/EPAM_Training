var arr = [0, 1, 2, 3, 4, 5, null, 0, 'null'];


function countNum(arg) {
    var evenArr = [];
    var oddArr = [];
    var nullsArr = [];

    arg.forEach(function (item) {
        if (item % 2 === 0 && item !== 0 && item !== null){
            // console.log(item);
            evenArr.push(item);
        } else if (item % 2 == 1){
            oddArr.push(item);
        } else if (item == 0){
            nullsArr.push(item);
        }
    });

    var resultString = "Четных: " + evenArr.length + " " + "Нечетных: " + oddArr.length + " ";

    if(nullsArr.length > 0){
        resultString = resultString + "Нулей: " + nullsArr.length;
    }

    console.log(resultString);
}

countNum(arr);

