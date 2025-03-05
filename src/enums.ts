export enum OrderStatus {
    Pending = 'Pending',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Canceled = 'Canceled'
}

export enum PaymentType {
    CreditCard = 'CreditCard',
    PayPal = 'PayPal',
    BankTransfer = 'BankTransfer',
    CashOnDelivery = 'CashOnDelivery'
}