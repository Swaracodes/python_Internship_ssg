
# ⚠️ Exception Handling in Python

Exception handling allows you to handle runtime errors in a graceful way.

---

## ✅ What is an Exception?
An **exception** is an error that occurs during the execution of a program. When an error occurs, Python stops the program and raises an exception.

Example:
```python
print(10 / 0)  # Raises ZeroDivisionError
```

---

## ✅ Basic try-except Block

```python
try:
    # Code that may raise an exception
    x = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

---

## ✅ Catching Multiple Exceptions

```python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input! Please enter a number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

---

## ✅ Using `else` and `finally`

```python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ZeroDivisionError:
    print("Division by zero is not allowed.")
else:
    print("Division successful:", result)
finally:
    print("This block always executes.")
```

- **else**: Runs if no exception occurs.
- **finally**: Always runs, even if an exception occurred or not.

---

## ✅ Raising Exceptions Manually

```python
age = int(input("Enter your age: "))
if age < 0:
    raise ValueError("Age cannot be negative")
```

---

## ✅ Custom Exception Class

```python
class MyError(Exception):
    pass

try:
    raise MyError("This is a custom error!")
except MyError as e:
    print(e)
```

---

## 📝 Summary

| Keyword   | Description                                 |
|-----------|---------------------------------------------|
| `try`     | Wraps code that may raise an error          |
| `except`  | Catches the exception                       |
| `else`    | Executes if no exception occurs             |
| `finally` | Always executes, error or not               |
| `raise`   | Raises a custom or built-in exception       |

---

✅ Exception handling helps prevent crashes and provides meaningful messages to users.
