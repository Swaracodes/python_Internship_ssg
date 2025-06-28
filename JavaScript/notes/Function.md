## What is Function?
- Functions help avoid repeating the same code again and again. Instead of writing the same console.log() five times, you can define a function once and call it many times.
## Function Declaration And Calling
- function functionName() {
- // code block
- }
- functionName(); // calling
## Summary
- Functions save time and make code reusable.
- Functions can accept inputs (parameters) and return outputs (results).
- Use functions for operations like checking conditions, processing arrays, or returning values.

## Arrow Functions
## What are Arrow Functions?
- Arrow functions (()=>{}) are a shorter and cleaner way to write functions, introduced in ES6.
- They help in making the code more concise, readable, and modern.

## Basic Arrow Function Syntax
- const functionName = () => {
-  // code block
- }
- functionName(); // call it like normal

## Important points about arrow functions
- Arrow functions are anonymous (no name) and are usually assigned to variables.
- Arrow functions don’t have their own this – useful for some specific use cases.
- Useful for short logic, callbacks, functional programming, etc.

## CallBack Function
## 🔹 What is a Callback Function?
- A callback function is a function passed as an argument to another function, and it is executed later after some operation is complete.

## 📌 What Are Default Parameters?
- Default parameters let you assign a default value to a function parameter if no value is passed or it’s undefined.

## ✅ Summary: Block Scope vs Function Scope in JavaScript
## 🔹 1. Block Scope (let and const)
- Variables declared with let or const are only accessible inside the block {} where they are defined.

- Block: any code inside {} — like if, for, or just {}.
## 🔹 2. Function Scope (var)
- Variables declared with var are only scoped to the function, not the block.
## 🔹 3. Same Variable Name in Different Scopes
- 👉 These two firstname variables do not interfere because they exist in different scopes.

## Rest Parameters in JS
## 📌 What are Rest Parameters?
- The rest parameter syntax (...) allows a function to accept any number of arguments as an array.
- This is useful when you don't know how many arguments will be passed.

## Important points
- Rest parameter must be the last parameter in the function.
- Only one rest parameter is allowed per function.
## Parameter Destructing in JS
## 📌 What is Parameter Destructuring?
- Parameter destructuring allows you to directly extract properties from an object passed to a function, making code cleaner and shorter.
## Why use it? 
- It avoids writing obj.property again and again.
- Very useful in: Working with objects