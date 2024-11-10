"use strict";
const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
function filterByProperty(array, property, value) {
    return array.filter(item => item[property] === value);
}
const activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
