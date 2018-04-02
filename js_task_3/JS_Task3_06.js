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

    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Object){
        var copy = {};
        for (var prop in obj){
            if (obj.hasOwnProperty(prop)) copy[prop] = cloneObj(obj[prop]);
        }
        return copy;
    }
}

var copyObj = cloneObj(obj);

console.log(copyObj);
console.log(obj.b === copyObj.b);
console.log(obj.e === copyObj.e);
console.log(obj.e.f === copyObj.e.f);


