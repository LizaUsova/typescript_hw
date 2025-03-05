"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Processing"] = "Processing";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Canceled"] = "Canceled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["CreditCard"] = "CreditCard";
    PaymentType["PayPal"] = "PayPal";
    PaymentType["BankTransfer"] = "BankTransfer";
    PaymentType["CashOnDelivery"] = "CashOnDelivery";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
