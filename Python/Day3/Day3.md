## 1. Operators

**Description:**  
    Operators are that from which operand perform operations

**Operators:**
- Arithmatic: `+,-,*,/,%`
- Logical: `&&,||,!`
- Relational: `>,<,==,===,<=,>=,!=`
- Assignment: `+=, -=, *=, /=, ==`
- Membership: `in, not in`
- Identity: `is, is not`
- Bitwise: `&, |, ~, ^, >>, <<`

---

# Python Functions - Complete Guide

## 1. Built-in Functions
These are pre-defined functions available in Python.

```python
print("Hello")
len("Python")
max(10, 20)
type(5)
```

---

## 2. User-defined Functions
Functions created using `def`.

```python
def greet():
    print("Hello, World!")

greet()
```

---

## 3. Function with Parameters
Pass values to functions.

```python
def add(a, b):
    return a + b

print(add(3, 5))  # Output: 8
```

---

## 4. Function with Default Parameter
Provides default value if not passed.

```python
def greet(name="Guest"):
    print("Hello", name)

greet("Swara")   # Hello Swara
greet()          # Hello Guest
```

---

## 5. Return Statement
Returns a value to the caller.

```python
def square(x):
    return x * x

result = square(4)  # 16
```

---

## 6. Recursive Function
A function that calls itself.

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

print(factorial(5))  # 120
```

---

## 7. Lambda Function (Anonymous Function)
Short one-line function using `lambda`.

```python
square = lambda x: x * x
print(square(5))  # 25
```

---

## 8. Function with *args (Variable-Length Positional Arguments)

```python
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # 10
```

---

## 9. Function with **kwargs (Variable-Length Keyword Arguments)

```python
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)

print_details(name="Swara", age=21)
```

---

## 10. Nested Function
A function inside another function.

```python
def outer():
    def inner():
        print("Inside inner function")
    inner()

outer()
```

---

## 11. Higher-Order Function
Takes or returns another function.

```python
def greet(name):
    return f"Hello {name}"

def display(func):
    print(func("Swara"))

display(greet)
```

---

## Summary Table

| Function Type      | Example / Keyword   |
|--------------------|---------------------|
| Built-in           | `print()`, `len()`  |
| User-defined       | `def`               |
| Default args       | `def f(x=5)`        |
| Return values      | `return`            |
| Recursive          | Calls itself        |
| Lambda             | `lambda x: x*x`     |
| *args              | Positional args     |
| **kwargs           | Keyword args        |
| Nested             | Function inside     |
| Higher-order       | Takes/returns func  |
