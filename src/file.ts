enum OrderStatus {
    Pending = 'Pending',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Canceled = 'Canceled'
}

enum PaymentType {
    CreditCard = 'CreditCard',
    PayPal = 'PayPal',
    BankTransfer = 'BankTransfer',
    CashOnDelivery = 'CashOnDelivery'
}

interface Order {
    id: string,
    amount: number,
    status: OrderStatus,
    paymentType: PaymentType
}

const orders: Order[] = [
    {
        id: "001",
        amount: 150.00,
        status: OrderStatus.Pending,
        paymentType: PaymentType.CreditCard
    },
    {
        id: "002",
        amount: 200.50,
        status: OrderStatus.Processing,
        paymentType: PaymentType.PayPal
    },
    {
        id: "003",
        amount: 50.00,
        status: OrderStatus.Shipped,
        paymentType: PaymentType.BankTransfer
    },
    {
        id: "004",
        amount: 99.99,
        status: OrderStatus.Delivered,
        paymentType: PaymentType.CashOnDelivery
    },
    {
        id: "005",
        amount: 120.00,
        status: OrderStatus.Canceled,
        paymentType: PaymentType.CreditCard
    }
];

let updateOrderStatus = (order: Order, status: OrderStatus): void => {
    const oldStatus = order.status;
    order.status = status;

    console.log(`Order ID: ${order.id} status updated from ${oldStatus} to ${status}`);
}

function getOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
    return orders.filter(order => order.status === status);
}

updateOrderStatus(orders[0], OrderStatus.Processing);

const pendingOrders = getOrdersByStatus(orders, OrderStatus.Pending);
console.log("Pending Orders:", pendingOrders);