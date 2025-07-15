
# 🐍 Object-Oriented Programming (OOP) in Python

Object-Oriented Programming (OOP) is a way to structure code using classes and objects. It helps organize complex programs and allows code reuse.

---

## ✅ 1. Class and Object

- **Class**: A blueprint for creating objects.
- **Object**: An instance of a class.

```python
class Student:
    def __init__(self, name):
        self.name = name

s1 = Student("Ravi")
print(s1.name)  # Output: Ravi
```

---

## ✅ 2. The `__init__` Method (Constructor)

- Automatically called when a new object is created.
- Used to initialize object data.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

---

## ✅ 3. `self` Keyword

- Refers to the current instance of the class.
- Used to access attributes and methods.

```python
class Student:
    def greet(self):
        print("Hello", self.name)
```

---

## ✅ 4. Attributes and Methods

- **Attributes**: Variables inside a class.
- **Methods**: Functions inside a class.

```python
class Car:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(self.brand, "is starting")
```

---

## ✅ 5. Encapsulation

- Hides data from direct access.
- Use `_` or `__` to make attributes private.

```python
class BankAccount:
    def __init__(self):
        self.__balance = 0

    def deposit(self, amount):
        self.__balance += amount

    def show_balance(self):
        print(self.__balance)
```

---

## ✅ 6. Inheritance

- Allows a class to use features of another class.

```python
class Animal:
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.speak()
d.bark()
```

---

## ✅ 7. Polymorphism

- Same method name behaves differently in different classes.

```python
class Bird:
    def sound(self):
        print("Tweet")

class Cat:
    def sound(self):
        print("Meow")

for animal in [Bird(), Cat()]:
    animal.sound()
```

---

## ✅ 8. Abstraction

- Hides unnecessary details and shows only important parts.
- Achieved using `ABC` module.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        print("Calculating circle area")
```

---

## ✅ 9. `__str__()` Method

- Used to print a custom string when an object is printed.

```python
class Student:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Student Name: {self.name}"

s = Student("Amit")
print(s)  # Output: Student Name: Amit
```

---

## 🧠 Summary Table

| Concept        | Description                              |
|----------------|------------------------------------------|
| Class          | Blueprint to create objects              |
| Object         | Instance of a class                      |
| Encapsulation  | Hiding internal data                     |
| Inheritance    | Reusing code from another class          |
| Polymorphism   | Different classes, same method name      |
| Abstraction    | Hiding unnecessary details               |
| Constructor    | `__init__` method to initialize values   |
| `__str__()`    | Used to return printable string of object|

---
