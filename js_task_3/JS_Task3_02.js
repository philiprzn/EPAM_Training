
var obj = {
    name : 'Ivan',
    age : '25',
    height : 177,
    gendere : 'male',
    11 : 'asd',
    'to Delete' : 'Delete Me'
};


function showProps(object) {
    for (var prop in object){
        console.log(prop + ' ' + '=>' + ' ' + object[prop]);
    }
}

showProps(obj);