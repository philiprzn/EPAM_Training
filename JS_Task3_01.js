var obj = {
    name : 'Ivan',
    age : '25',
    height  : 177,
    gendere : 'male',
    'to Delete' : 'Delete Me'
};

delete  obj.gendere;
delete obj['to Delete'];

for (var key in obj){
    console.log(key);
}