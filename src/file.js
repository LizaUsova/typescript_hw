"use strict";
const arr = [1, 2, 3];
function reverseArray(arr) {
    return arr.reverse();
}
const reversedArr = reverseArray(arr);
console.log(reversedArr === arr);
console.log(reversedArr);
