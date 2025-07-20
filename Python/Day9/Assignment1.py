from abc import ABC, abstractmethod
import os

# Abstract Base Class
class Account(ABC):
    def __init__(self, account_number, name, balance):
        self.__account_number = account_number
        self.__name = name
        self.__balance = balance

    @abstractmethod
    def deposit(self, amount):
        pass

    @abstractmethod
    def withdraw(self, amount):
        pass

    @abstractmethod
    def get_balance(self):
        pass

    @property
    def account_number(self):
        return self.__account_number

    @property
    def name(self):
        return self.__name

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, amount):
        self.__balance = amount

    def to_dict(self):
        return {
            "account_number": self.__account_number,
            "name": self.__name,
            "balance": self.__balance
        }


# Concrete class
class SavingsAccount(Account):
    MIN_BALANCE = 500

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print("Amount deposited successfully.")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        if 0 < amount <= self.balance - self.MIN_BALANCE:
            self.balance -= amount
            print("Amount withdrawn successfully.")
        else:
            print("Insufficient balance or invalid amount.")

    def get_balance(self):
        return self.balance


# Bank class to manage multiple accounts
class Bank:
    def __init__(self):
        self.accounts = {}  # Key: account number, Value: SavingsAccount
        self.load_accounts()

    def create_account(self, name, opening_balance):
        try:
            if opening_balance < SavingsAccount.MIN_BALANCE:
                raise ValueError("Opening balance must be at least ₹500")

            account_number = 1000 + len(self.accounts) + 1
            acc = SavingsAccount(account_number, name, opening_balance)
            self.accounts[account_number] = acc
            self.save_accounts()
            print(f"Account created successfully! Account No: {account_number}")
        except ValueError as e:
            print(e)

    def find_account(self, acc_no):
        return self.accounts.get(acc_no)

    def deposit_to_account(self, acc_no, amount):
        acc = self.find_account(acc_no)
        if acc:
            acc.deposit(amount)
            self.save_accounts()
        else:
            print("Account not found.")

    def withdraw_from_account(self, acc_no, amount):
        acc = self.find_account(acc_no)
        if acc:
            acc.withdraw(amount)
            self.save_accounts()
        else:
            print("Account not found.")

    def check_balance(self, acc_no):
        acc = self.find_account(acc_no)
        if acc:
            print(f"Current Balance: ₹{acc.get_balance()}")
        else:
            print("Account not found.")

    def transfer_money(self, from_acc, to_acc, amount):
        acc_from = self.find_account(from_acc)
        acc_to = self.find_account(to_acc)
        if acc_from and acc_to:
            if acc_from.get_balance() - SavingsAccount.MIN_BALANCE >= amount:
                acc_from.withdraw(amount)
                acc_to.deposit(amount)
                self.save_accounts()
                print("Transfer successful.")
            else:
                print("Insufficient balance to transfer.")
        else:
            print("Invalid account number(s).")

    def save_accounts(self):
        with open("accounts.txt", "w") as f:
            for acc in self.accounts.values():
                data = acc.to_dict()
                f.write(f"{data['account_number']},{data['name']},{data['balance']}\n")

    def load_accounts(self):
        if os.path.exists("accounts.txt"):
            with open("accounts.txt", "r") as f:
                for line in f:
                    acc_no, name, balance = line.strip().split(",")
                    acc = SavingsAccount(int(acc_no), name, float(balance))
                    self.accounts[int(acc_no)] = acc


# CLI interface
def main():
    bank = Bank()
    while True:
        print("\n--- Welcome to Python Bank ---")
        print("1. Create Account")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Check Balance")
        print("5. Transfer Money")
        print("6. Exit")
        choice = input("Enter your choice: ")

        try:
            if choice == '1':
                name = input("Enter name: ")
                opening_balance = float(input("Enter opening balance: "))
                bank.create_account(name, opening_balance)

            elif choice == '2':
                acc_no = int(input("Enter Account No: "))
                amount = float(input("Enter amount to deposit: "))
                bank.deposit_to_account(acc_no, amount)

            elif choice == '3':
                acc_no = int(input("Enter Account No: "))
                amount = float(input("Enter amount to withdraw: "))
                bank.withdraw_from_account(acc_no, amount)

            elif choice == '4':
                acc_no = int(input("Enter Account No: "))
                bank.check_balance(acc_no)

            elif choice == '5':
                from_acc = int(input("From Account No: "))
                to_acc = int(input("To Account No: "))
                amount = float(input("Amount to transfer: "))
                bank.transfer_money(from_acc, to_acc, amount)

            elif choice == '6':
                print("Thank you for using Python Bank.")
                break

            else:
                print("Invalid choice. Try again.")
        except ValueError:
            print("Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    main()
