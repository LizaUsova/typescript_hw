"use strict";
function reverseArray(arr) {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}
const arr = [1, 2, 3];
const reversedArr = reverseArray(arr);
console.log(reversedArr === arr);
