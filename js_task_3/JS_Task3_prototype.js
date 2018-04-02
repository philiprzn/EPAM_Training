var obj = {
    a : 1,
    b : 2,
};

var obj1 = Object.create(obj);
obj1.c = 3;

for (var key in obj1){
    if (obj1.hasOwnProperty(key)){
        console.log(key);
    }
}


console.log(obj1);   // https://github.com/philiprzn/JS_Task_4