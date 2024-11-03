/* 1. Розширення та об'єднання інтерфейсів */

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface User {
    name: string;
    age: number;
}

interface UserWithAddress extends Address, User {
    email: string;
}

const user: UserWithAddress = {
    name: "Liza",
    age: 37,
    street: "Mechnikova",
    city: "Odessa",
    zipCode: 65000,
    email: "liza.usova@gmail.com"
};

console.log(user);