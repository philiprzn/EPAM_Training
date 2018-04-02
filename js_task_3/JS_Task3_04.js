function checkProp(str, object) {

    if ((str in object) === false){
        object[str] = 'new';
    }

    return object;
}


var obj = {
    name : 'Ivan',
    age : '25',
    height : 177,
    gendere : 'male'
};


console.log(checkProp( 'prop', obj));