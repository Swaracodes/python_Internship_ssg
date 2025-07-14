balance = 1000.0  # Initial balance

def check_balance():
    print(f"Your current balance is: ₹{balance}")

def deposit():
    global balance
    try:
        amount = float(input("Enter amount to deposit: ₹"))
        if amount <= 0:
            raise ValueError("Deposit amount must be greater than zero.")
        balance = balance + amount
        print(f"₹{amount} deposited successfully.")
    except ValueError as ve:
        print("Error:", ve)

def withdraw():
    global balance
    try:
        amount = float(input("Enter amount to withdraw: ₹"))
        if amount <= 0:
            raise ValueError("Withdrawal amount must be greater than zero.")
        if amount > balance:
            raise Exception("Insufficient balance.")
        balance = balance - amount
        print(f"₹{amount} withdrawn successfully.")
    except ValueError as ve:
        print("Error:", ve)
    except Exception as e:
        print("Error:", e)

def atm():
    while True:
        print("\n======= ATM MENU =======")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")

        try:
            choice = int(input("Enter your choice (1-4): "))
            if choice == 1:
                check_balance()
            elif choice == 2:
                deposit()
            elif choice == 3:
                withdraw()
            elif choice == 4:
                print("Thank you for using the ATM. Goodbye!")
                break
            else:
                print("Invalid choice! Please select a valid option.")
        except ValueError:
            print("Please enter a number between 1 and 4.")

# Run the ATM
atm()
