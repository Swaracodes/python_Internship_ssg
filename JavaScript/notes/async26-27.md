## 🔁 What is setInterval()?
- setInterval() is a timing method in JavaScript.
- It repeatedly executes a function or expression at specified time intervals (in milliseconds).
- It keeps running until: The page is closed, Or you stop it using clearInterval().
> setInterval(function, delayInMilliseconds);

## 🔹 What is setTimeout()?
- setTimeout() is a JavaScript global function that:
- Executes a function once after a specified delay (in milliseconds).
- It does not block the rest of the code from running.

> setTimeout(function, delayInMilliseconds);

## ⏱️ Delay and Execution
- JavaScript waits for the delay without blocking the main thread.
- The function is queued and executed after the current stack is empty.
## 🔍 What is the Event Loop?
- JavaScript has single-threaded execution.
- The event loop: Watches the call stack, If stack is empty, it picks the next task from the callback queue (e.g., from setTimeout() or DOM events), This explains why even a 0ms delay waits until all synchronous code is done.

## ✅ Summary: Synchronous vs Asynchronous Programming in JavaScript

## 🔹 1. JavaScript: Single-Threaded and Synchronous by Default
- JavaScript runs one task at a time, line by line — this is called synchronous programming.
- Only after one operation completes, the next starts.
- The engine has one call stack, meaning only one function runs at a time.

## 🔸 2. Synchronous Programming

> 🧠 What happens:
> - Executes from top to bottom.
> - Blocks the thread — nothing else can run while the loop is executing.
> - Everything waits for current task to finish.

## 🔸 3. Asynchronous Programming
- JS moves the setTimeout callback to the task queue.
- When the call stack is empty, the event loop picks and executes the callback.

## ✅ Summary: Using Promise and Async/Await in JavaScript
- 🔹 Goal of the Code
> - Perform a GET request to an API using fetch().
> - Use async/await for cleaner syntax.
> - Handle success (then) and error (catch).
> - Demonstrate non-blocking (asynchronous) behavior.

- 🧠 What is Happening?
> console.log("Script Start");
> - ✔️ Prints immediately — starts the script.

- 📡 The API URL
> const URL = "https://jsonplaceholder.typicode.com/posts";
> - ✔️ This is a fake online REST API for testing.

## ⚙️ Async Function to Fetch Data
> 🔍 await pauses the function execution until the Promise is resolved.
> - 🟢 If the API works → returns data
> - 🔴 If the fetch fails or response is not OK → throws error

## 📄 1. microtask_vs_macrotask.md
# Microtask vs Macrotask in JavaScript

## 🧠 Event Loop Overview
JavaScript is single-threaded. It handles concurrency using the **event loop**, which processes tasks from different queues:

- **Call Stack**: Executes current code.
- **Microtask Queue**: Higher priority queue.
- **Macrotask Queue**: Lower priority queue.

---

## 🔄 Task Types

| Task Type  | Example APIs                        | Executes After     |
|------------|-------------------------------------|--------------------|
| Microtask  | `Promise.then`, `MutationObserver`  | Current task       |
| Macrotask  | `setTimeout`, `setInterval`, `fetch`, `setImmediate` | Microtasks queue |

---

## 🔍 Execution Order Example

```javascript
console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("script end");
```
📌 Key Points
Microtasks have priority over macrotasks.

After each task, all microtasks run before the next macrotask.

Helps with predictable asynchronous behavior.


---

### 📄 **2. `api_http_https.md`**

```markdown
# API, HTTP & HTTPS – Self Study Notes

## 🌐 What is an API?
- **API** = Application Programming Interface
- A set of rules that allow programs to communicate.
- Web APIs are accessed via HTTP requests.

---

## 📡 HTTP Basics

### 📌 HTTP (HyperText Transfer Protocol)
- Protocol for transferring data between client (browser) and server.
- Stateless and text-based.

### 🔄 HTTP Request Methods:
| Method | Use                        |
|--------|----------------------------|
| GET    | Retrieve data              |
| POST   | Send new data              |
| PUT    | Update existing data       |
| DELETE | Remove data                |

---

### 🧾 HTTP Response Status Codes

| Code | Meaning              | Type           |
|------|----------------------|----------------|
| 200  | OK                   | Success        |
| 201  | Created              | Success        |
| 400  | Bad Request          | Client Error   |
| 401  | Unauthorized         | Client Error   |
| 403  | Forbidden            | Client Error   |
| 404  | Not Found            | Client Error   |
| 500  | Internal Server Error| Server Error   |
| 503  | Service Unavailable  | Server Error   |

---

## 🔒 HTTPS (HTTP Secure)

- **HTTPS** = HTTP + SSL/TLS
- Ensures:
  - 🔐 Data Encryption
  - ✅ Authentication (verifies server identity)
  - 🔄 Integrity (prevents data tampering)

---

## 📌 Summary

- **API**: Interface to interact with software.
- **HTTP**: Protocol to send/receive data.
- **HTTPS**: Secure version of HTTP.
- **Status Codes**: Help understand success or failure of HTTP requests.
