var obj = {
    name : 'Ivan',
    age : '25',
    height : 177,
    gendere : 'male'
}

function copyObj(obj) {
    newObj = {};
    for (var prop in obj){
        newObj[prop] = obj[prop];
    }
    return newObj;
}


copyObj(obj);

console.log(newObj);
