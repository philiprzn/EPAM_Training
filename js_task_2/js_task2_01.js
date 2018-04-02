function showType(arg) {
    if ((typeof arg) == 'string'){
        console.log('Это строка');
    }else if ((typeof  arg) == 'number'){
        console.log('Это число');
    } else {
        console.log('Неподходящий тип');
    };
};

showType(123);
showType('123');
showType(null);