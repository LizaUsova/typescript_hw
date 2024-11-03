"use strict";
/* 1. Розширення та об'єднання інтерфейсів */
const user = {
    name: "Liza",
    age: 37,
    street: "Mechnikova",
    city: "Odessa",
    zipCode: 65000,
    email: "liza.usova@gmail.com"
};
console.log(user);
const orders = [
    {
        orderId: "ORD001",
        userId: "USER123",
        products: [
            {
                name: "Laptop",
                price: 999.99,
                category: { categoryName: "Electronics", categoryId: "CAT001" }
            }
        ]
    },
    {
        orderId: "ORD002",
        userId: "USER456",
        products: [
            {
                name: "Mouse",
                price: 29.99,
                category: { categoryName: "Accessories", categoryId: "CAT002" }
            }
        ]
    }
];
console.log(orders);
const person = {
    firstName: 'Liza',
    lastName: 'Usova',
    middleName: 'maybe'
};
function getFullName(person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return "Ключ middleName відсутен";
}
console.log(getFullName(person));
