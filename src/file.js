"use strict";
const numbers = [10, 15, 25, 50];
function getAverageValue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(getAverageValue(numbers));
