
# 🐍 Loops in Python

Loops are used to execute a block of code repeatedly as long as a condition is true.

---

## 🔁 Types of Loops in Python

1. **`for` loop**
2. **`while` loop**
3. **Nested loops**
4. **Loop control statements**
   - `break`
   - `continue`
   - `pass`

---

## 1️⃣ `for` Loop

The `for` loop is used to iterate over a sequence (like list, tuple, string, or range).

### 🔹 Syntax:
```python
for variable in sequence:
    # code block
```

### 🔹 Example:
```python
for i in range(5):
    print(i)
```
📌 *Output: 0 1 2 3 4*

---

## 2️⃣ `while` Loop

Executes a block of code as long as a condition is true.

### 🔹 Syntax:
```python
while condition:
    # code block
```

### 🔹 Example:
```python
count = 0
while count < 5:
    print(count)
    count += 1
```
📌 *Output: 0 1 2 3 4*

---

## 3️⃣ Nested Loops

Loops inside loops are called nested loops.

### 🔹 Example:
```python
for i in range(3):
    for j in range(2):
        print(i, j)
```
📌 *Output:*
```
0 0
0 1
1 0
1 1
2 0
2 1
```

---

## 🔄 Loop Control Statements

### ✅ `break` Statement
Used to exit the loop prematurely.

```python
for i in range(5):
    if i == 3:
        break
    print(i)
# Output: 0 1 2
```

### 🔁 `continue` Statement
Skips the current iteration and continues with the next.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
# Output: 0 1 3 4
```

### ⏭️ `pass` Statement
A placeholder that does nothing.

```python
for i in range(5):
    if i == 3:
        pass
    print(i)
# Output: 0 1 2 3 4
```

---

## ✅ Summary Table

| Loop Type       | Description                                | Use Case Example               |
|----------------|--------------------------------------------|-------------------------------|
| `for` loop      | Iterates over items of a sequence          | `for i in range(10)`          |
| `while` loop    | Repeats while a condition is true          | `while x < 5:`                |
| `break`         | Exits the loop early                       | `if condition: break`         |
| `continue`      | Skips to next iteration                    | `if condition: continue`      |
| `pass`          | Does nothing, useful as placeholder        | `if condition: pass`          |

---

🧠 **Tip:** Use `for` when you know the number of iterations. Use `while` when the loop depends on a condition.


# 🔍 Scope in Python

In Python, **scope** refers to the region of a program where a **variable is recognized** and can be used. Understanding scope is essential for managing variables effectively in your programs.

---

## 📚 Types of Scope in Python

1. **Local Scope**
2. **Enclosing Scope**
3. **Global Scope**
4. **Built-in Scope**

This concept is often referred to as the **LEGB Rule**.

---

## 1️⃣ Local Scope

Variables defined inside a function are in the **local scope**.

```python
def my_function():
    x = 10  # local scope
    print(x)

my_function()
# Output: 10
```

---

## 2️⃣ Enclosing Scope

This refers to the scope of the **outer function** in a nested function.

```python
def outer():
    x = "outer"
    def inner():
        print(x)  # accessing enclosing variable
    inner()

outer()
# Output: outer
```

---

## 3️⃣ Global Scope

Variables defined **outside all functions** are in the **global scope** and can be accessed inside functions using the `global` keyword if you want to modify them.

```python
x = 5  # global variable

def my_function():
    global x
    x = 10

my_function()
print(x)  # Output: 10
```

---

## 4️⃣ Built-in Scope

These are names that are built into Python (like `print()`, `len()`, etc.).

```python
print(len("Hello"))  # Output: 5
```

---

## 🔁 LEGB Rule Summary

| Scope Type   | Description                                   |
|--------------|-----------------------------------------------|
| Local        | Names assigned inside a function              |
| Enclosing    | Names in the local scope of enclosing function|
| Global       | Names defined at the top-level of a script    |
| Built-in     | Predefined names in Python                    |

---

## 🛠️ Example Demonstrating All Scopes

```python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)  # local
    inner()
    print(x)      # enclosing

outer()
print(x)          # global
```

### 📌 Output:
```
local
enclosing
global
```

---

🧠 **Tip:** Use `global` to modify global variables inside a function. Use `nonlocal` to modify variables from the enclosing scope.
