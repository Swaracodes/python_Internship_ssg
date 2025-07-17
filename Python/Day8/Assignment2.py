from abc import ABC, abstractmethod

# Abstract class
class PaymentMethod(ABC):

    @abstractmethod
    def pay(self, amount):
        pass

# Concrete class 1
class CreditCard(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using Credit Card.")

# Concrete class 2
class UPI(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using UPI.")

# Creating objects and calling pay method
credit = CreditCard()
upi = UPI()

print("\n=== Payment Methods (Abstraction) ===")
credit.pay(500)
upi.pay(250)
