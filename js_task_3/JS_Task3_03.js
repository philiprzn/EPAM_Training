function hasProp(str, object) {
    for (var prop in object){
        if (prop === str) return true;
    }
    return false;
}



var obj = {
    name : 'Ivan',
    age : '25',
    height : 177,
    gendere : 'male',
    'to Delete' : 'Delete Me'
};


console.log(hasProp('height', obj));
console.log(hasProp('asd', obj));