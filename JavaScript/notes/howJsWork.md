## 🔄 What is Hoisting?
- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).

## 🟦 Hoisting with var
- Declarations using var are hoisted and initialized as undefined.
- You can use the variable before declaring, but its value will be undefined until the assignment.

## 🟨 Hoisting with let and const
- let and const are also hoisted, but not initialized.
- Accessing them before declaration gives a ReferenceError.
- This is called the Temporal Dead Zone (TDZ).

## 🟩 Hoisting with Functions
- Function declarations are fully hoisted (both name and body).
- You can call the function before its declaration.

## ✅ Final Takeaway:
- var is hoisted and initialized to undefined.
- let/const are hoisted but not initialized (TDZ).
- Function declarations are fully hoisted.
- Hoisting only moves declarations, not assignments.

## 🧠 Why is JavaScript Compiled First?
> 🛠️ 1. Compilation Phase
- The JS engine performs:
- Tokenizing / Lexing – Breaks code into meaningful pieces (tokens)
- Parsing – Builds an Abstract Syntax Tree (AST)
- Code Generation – Converts AST to executable code
> 🚨 At this point:
- JS identifies variables (var, let, const) and functions
- But only var and function declarations are hoisted
- No values are assigned yet
> 🏃‍♂️ 2. Execution Phase
- Now the code actually runs line-by-line inside something called the Execution Context
> 🔁 What is an Execution Context?
- Variable Environment (Memory/Scope)
- Thread of Execution (Code line execution)
- this Binding
> Types:
- Global Execution Context (GEC) – Created by default (once per JS file)
- Function Execution Context (FEC) – Created each time a function runs

> 🔸 JS is single-threaded and synchronous
> 🔸 But browsers enable async behavior (via Web APIs)

## 🌍 What Happens in Global Execution Context (GEC)?
- 📌 Creation Phase:
- this → points to global object (i.e., window in browser)
- var declarations → added with value undefined
- let and const → hoisted but not initialized (TDZ: Temporal Dead Zone)
- Function declarations → fully hoisted

## 📌 Execution Phase:
- Code runs top to bottom
- Values assigned and functions invoked

## 📌 Key Points to Remember:
- 🟢 JS is synchronous and single-threaded
- 🟡 Code runs inside Execution Contexts
- 🔴 GEC is created by default
- 🟣 Function calls create new Execution Contexts
- 🔵 Hoisting = declaration goes to top (not value)

## ✅ JavaScript: Function Execution Context (FEC)
> 🔁 What is an Execution Context?
- It's the environment in which JavaScript evaluates and executes code.
- There are two types:
> - 🧍‍♂️ Global Execution Context (GEC) – created by default
> - 👨‍🔧 Function Execution Context (FEC) – created each time a function is called
## 📦 Structure of an Execution Context:
- Each Execution Context has 3 key parts:
> - Variable Environment – where variables/functions are stored
> - Scope Chain – access to outer variables
> - Value of this – context object (window in GEC)