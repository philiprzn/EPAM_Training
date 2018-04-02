var obj = {
    a : 1,
    b : {
        c : 0
    },
    e : {
        f : {
            g : 1
        }
    }
};


function cloneObj(obj) {
    const gdcc = "__getDeepCircularCopy__";
    if (obj !== Object(obj)){
        return obj;
    }

    var set = gdcc in obj,
        cache = obj[gdcc],
        result;

    if (set && typeof cache =="function"){
        return cache();
    }

    obj[gdcc] = function () {
        return result
    };
    if (obj instanceof Array){
        result = [];
        for (var i = 0; i < obj.length; i++){
            result[i] = cloneObj(obj[i]);
        }
    } else {
        result = {};
        for (var prop in obj){
            if (prop != gdcc){
                result[prop] = cloneObj(obj[prop]);
            } else if (set){
                result[prop] = cloneObj(cache);
            }
        }
    }
    if (set) {
        obj[gdcc] = cache;
    } else {
        delete obj[gdcc]
    }
    return result;

}



var copyObj = cloneObj(obj);

console.log(copyObj);
console.log(obj.b === copyObj.b);
console.log(obj.e === copyObj.e);
console.log(obj.e.f === copyObj.e.f);


