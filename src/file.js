"use strict";
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clonedObject = (Array.isArray(obj) ? [] : {});
    Object.keys(obj).forEach(key => {
        clonedObject[key] = deepClone(obj[key]);
    });
    return clonedObject;
}
const original = {
    a: 1,
    b: { c: 2 },
    d: [3, 4]
};
const copy = deepClone(original);
console.log(copy);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
