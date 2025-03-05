"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const orders = [
    {
        id: "ORD001",
        amount: 150.75,
        status: enums_1.OrderStatus.Pending,
        paymentType: enums_1.PaymentType.CreditCard
    },
    {
        id: "ORD002",
        amount: 299.99,
        status: enums_1.OrderStatus.Shipped,
        paymentType: enums_1.PaymentType.PayPal
    },
    {
        id: "ORD003",
        amount: 79.5,
        status: enums_1.OrderStatus.Processing,
        paymentType: enums_1.PaymentType.CashOnDelivery
    }
];
const updateOrderStatus = (order, status) => {
    order.status = status;
    console.log(`Замовлення ${order.id} змінено на статус: ${status}`);
};
const getOrdersByStatus = (orders, status) => orders.filter(order => order.status === status);
// Тестування функцій
console.log("Всі замовлення:", orders);
updateOrderStatus(orders[0], enums_1.OrderStatus.Processing);
console.log("Замовлення зі статусом Processing:", getOrdersByStatus(orders, enums_1.OrderStatus.Processing));
