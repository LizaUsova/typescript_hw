import { Order} from "./interfaces";
import { OrderStatus, PaymentType } from "./enums";

const orders: Order[] = [
    {
        id: "ORD001",
        amount: 150.75,
        status: OrderStatus.Pending,
        paymentType: PaymentType.CreditCard
    },
    {
        id: "ORD002",
        amount: 299.99,
        status: OrderStatus.Shipped,
        paymentType: PaymentType.PayPal
    },
    {
        id: "ORD003",
        amount: 79.5,
        status: OrderStatus.Processing,
        paymentType: PaymentType.CashOnDelivery
    }
];

const updateOrderStatus = (order: Order, status: OrderStatus): void => {
    order.status = status;
    console.log(`Замовлення ${order.id} змінено на статус: ${status}`);
};

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] =>
    orders.filter(order => order.status === status);

// Тестування функцій
console.log("Всі замовлення:", orders);
updateOrderStatus(orders[0], OrderStatus.Processing);
console.log("Замовлення зі статусом Processing:", getOrdersByStatus(orders, OrderStatus.Processing));