"use strict";
function createTree(num) {
    if (num <= 0) {
        return null;
    }
    return {
        value: num,
        child: createTree(num - 1),
    };
}
console.log(createTree(3));