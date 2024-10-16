'use strict';
function BankAccount(initialBalance = 0) {
    let balance = initialBalance;

    this.deposit = function(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        balance += amount;
    };

    this.withdraw = function(amount) {
        if (amount > balance) {
            throw new Error('Insufficient funds');
        }
        if (amount <= 0) {
            throw new Error('Withdraw amount must be positive');
        }
        balance -= amount;
    };

    this.getBalance = function() {
        return balance;
    };
}


const myAccount = new BankAccount(200);

myAccount.deposit(100);
console.log(myAccount.getBalance());

myAccount.withdraw(20);
console.log(myAccount.getBalance());