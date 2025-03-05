import { OrderStatus, PaymentType } from "./enums";
export interface Order {
    id: string;
    amount: number;
    status: OrderStatus;
    paymentType: PaymentType;
}