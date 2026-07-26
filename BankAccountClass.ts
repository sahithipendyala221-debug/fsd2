// Program to Create a BankAccount Class

class BankAccount {

    accountHolder: string;
    balance: number;

    // Constructor
    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Method to deposit money
    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Deposited Amount = " + amount);
    }

    // Method to withdraw money
    withdraw(amount: number): void {

        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Withdrawn Amount = " + amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    // Method to display balance
    displayBalance(): void {
        console.log("Account Holder = " + this.accountHolder);
        console.log("Available Balance = " + this.balance);
    }
}

// Create an object
let account1 = new BankAccount("Sahithi", 5000);

// Deposit money
account1.deposit(2000);

// Withdraw money
account1.withdraw(1500);

// Display balance
account1.displayBalance();