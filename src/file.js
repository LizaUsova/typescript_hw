"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Processing"] = "Processing";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Canceled"] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["CreditCard"] = "CreditCard";
    PaymentType["PayPal"] = "PayPal";
    PaymentType["BankTransfer"] = "BankTransfer";
    PaymentType["CashOnDelivery"] = "CashOnDelivery";
})(PaymentType || (PaymentType = {}));
const orders = [
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
let updateOrderStatus = (order, status) => {
    const oldStatus = order.status;
    order.status = status;
    console.log(`Order ID: ${order.id} status updated from ${oldStatus} to ${status}`);
};
const order1 = {
    id: "001",
    amount: 150.00,
    status: OrderStatus.Pending,
    paymentType: PaymentType.CreditCard
};
updateOrderStatus(order1, OrderStatus.Processing);
