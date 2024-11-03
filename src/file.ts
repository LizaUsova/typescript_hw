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

/*2. Створення типів для даних із вкладеними інтерфейсами */

interface Product  {
    name: string;
    price: number;
    category: {
        categoryName: string;
        categoryId: string;
    }
}

interface Order {
    orderId: string;
    userId: string;
    products: Product[];
}

type OrdersArray = Order[];

const orders: OrdersArray = [
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

/* 3. Обов'язкові та необов'язкові поля */

interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}

const person: Person = {
    firstName: 'Liza',
    lastName: 'Usova',
    middleName: 'maybe'
}

function getFullName (person: Person): string {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }

    return "Ключ middleName відсутен"
}

console.log(getFullName(person));

/* 4. Створення інтерфейсу для зчитування налаштувань */

interface Settings {
    theme: 'light' | 'dark';
    notifications: boolean;
    autoSave: {
        enabled: boolean;
        interval: number;
    }
}

function applySettings(settings: Settings) {
    if (settings.notifications) {
        console.log("Повідомлення увімкнено.");
    } else {
        console.log("Повідомлення вимкнено.");
    }

    if (settings.autoSave.enabled) {
        console.log(`Авто збереження увімкнено. Інтервал: ${settings.autoSave.interval} мс.`);
    } else {
        console.log("Авто збереження вимкнено.");
    }
}