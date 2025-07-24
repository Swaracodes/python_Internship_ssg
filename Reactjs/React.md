
# 📘 React JS with Vite Setup Guide

This document provides a complete overview of setting up a React project using Vite, including the key files, folders, tools, and commands involved.

---

## ⚙️ Prerequisites

### 1. Node.js
- Download and install Node.js for Windows (.msi installer).
- Confirm installation using:
```bash
node --version
```

---

## 🧑‍💻 Visual Studio Code Setup

### 2. Create a Project Folder
```bash
# Open terminal
set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm create vite@latest
```
- Name your package/project (e.g., `ReactIntro`).

---

## 📁 Folder Structure: `ReactIntro`

### - node_modules
Contains installed packages and dependencies.

### - public

### - src
Contains source files of the React app:
```bash
1. App.jsx      --> Defines UI structure as React component
2. Main.jsx     --> Connects React to HTML
3. App.css      --> Styling rules
```

---

## 📄 Important Files

### 1. `index.html`
- Entry point HTML file used by Vite.
- Loads React code via `main.jsx`.

### 2. `package.json`
- Lists dependencies and scripts.
- Sections:
  - `dev` ➝ Runs local dev server.
  - `dependencies` ➝ React, TailwindCSS, etc.
  - `devDependencies` ➝ Vite, ESLint, etc.

### 3. `package-lock.json`
- Records exact versions of installed dependencies.

### 4. `.gitignore`
- Tells Git which files to ignore.
- Keeps repo clean.

### 5. `vite.config.js`
- Configures Vite build tools.

### 6. `eslint.config.js`
- Configures ESLint to catch code issues.
- Ensures code quality and reduces bugs.

### 7. `README.md`
- Explains the project setup.

---

## 🚀 Run Your Project

```bash
cd ReactIntro
npm install            # Installs 150+ packages
npm run dev            # Runs localhost server
```

---

## 🎨 Tailwind CSS Setup

```bash
npm install -D tailwindcss @tailwindcss/vite
```
- Adds 300+ packages and auditing.

---

## 🔍 Key Concepts from node_modules

### ✅ Scoped Packages (@name/package)
- `@vitejs` ➝ Vite-specific packages
- `@tailwindcss` ➝ Tailwind styling utilities
- `@babel`, `@eslint`, `@types` ➝ Transpilers, linters, typings

### ✅ Build Tools & Libraries
- `rollup`, `esbuild` ➝ Vite uses for bundling
- `chalk` ➝ Adds color to terminal logs
- `ajv`, `acorn`, `brace-expansion` ➝ Parsing, formatting utilities

### ✅ Executable Binaries
- `.bin/` ➝ Contains CLI tools (e.g., vite, react-scripts)

### ⚙️ Temporary/Metadata Folders
- `.vite`, `.vite-temp` ➝ Used by Vite for caching and speeding builds

---

## 📌 Notes

- Always keep dependencies updated.
- Avoid editing files in `node_modules`.
- Keep `.gitignore` updated to prevent committing sensitive or unnecessary files.

---

Created with ❤️ for React beginners!
