const arr = [1, 2, 3];
function reverseArray (arr: number[]): number[] {
    return arr.reverse()
}

const reversedArr = reverseArray(arr)
console.log(reversedArr === arr);
console.log(reversedArr);