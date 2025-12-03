
# 📘 JavaScript Variables and Data Types — Complete Guide

---

## 📑 Table of Contents
- [Introduction](#introduction)
- [HTML, CSS, and JavaScript](#html-css-and-javascript)
- [JavaScript Data Types](#javascript-data-types)
  - Number  
  - String  
  - Boolean  
  - Undefined & Null  
  - Object  
  - Symbol  
  - BigInt  
- [Variables in JavaScript](#variables-in-javascript)
- [Variable Naming Rules](#variable-naming-conventions)
- [Strings & Immutability](#strings--immutability)
- [String Concatenation](#string-concatenation)
- [console.log](#logging-with-consolelog)
- [Semicolons](#semicolons-in-javascript)
- [Comments](#comments-in-javascript)
- [Dynamic Typing](#javascript-as-a-dynamically-typed-language)
- [typeof Operator](#using-the-typeof-operator)

---

# Introduction

This guide is designed to help beginners understand the **core concepts of JavaScript variables and data types**.  
It is ideal for:

- Revision notes  
- GitHub project documentation  
- Study material  

---

# HTML, CSS, and JavaScript

- **HTML** → structure  
- **CSS** → styling  
- **JavaScript** → interactivity  

JavaScript enables:
- Event handling  
- Animations  
- Form validation  
- Dynamic updates  
- Web applications  

---

# JavaScript Data Types

JavaScript has **8 main data types**.

---

## 1️⃣ Number  
Represents integers and floating-point numbers.

```js
let age = 30;
let score = 4.5;
```

---

## 2️⃣ String  
A sequence of characters.

```js
"I like coding"
'JavaScript is fun'
```

---

## 3️⃣ Boolean  
Represents logical values: `true` or `false`.

```js
let isLoggedIn = true;
```

---

## 4️⃣ Undefined & Null  
| Type | Meaning |
|------|---------|
| **Undefined** | variable declared but not assigned |
| **Null** | intentional empty value |

---

## 5️⃣ Object  
Key–value pairs.

```js
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};
```

---

## 6️⃣ Symbol  
Always unique values.

```js
const a = Symbol("test");
const b = Symbol("test");
console.log(a === b); // false
```

---

## 7️⃣ BigInt  
Used for very large integers.

```js
const big = 99999999999999999999999n;
```

---

# Variables in JavaScript

Variables store values.

---

## `let` — Reassignable  

```js
let city;
city = "Delhi";
city = "Mumbai";
```

---

## `const` — Not Reassignable  

```js
const PI = 3.14;
```

Attempting to reassign causes:

```
TypeError: Assignment to constant variable.
```

---

# Variable Naming Conventions

✔ Must start with: letter, `_`, or `$`  
✔ camelCase recommended  
✔ Cannot start with a number  
✔ Cannot contain spaces  
✔ Cannot use reserved keywords  
✔ Case-sensitive  
✔ Should be meaningful  

Examples:  
`userName`, `isLoggedIn`, `maxLimit`

---

# Strings & Immutability

```js
let name = "John";
name = "Jane";  // Reassignment allowed
```

But characters inside strings cannot be changed individually.

---

# String Concatenation

### ➕ Using + operator  
```js
let info = "Asad" + " is " + 25 + " years old.";
```

### ➕ Using +=  
```js
let message = "Hello ";
message += "Asad!";
```

### ➕ Using concat()  
```js
let fullName = firstName.concat(" ", lastName);
```

---

# Logging with console.log()

Used to print output or debug:

```js
console.log("Hello, World!");
```

---

# Semicolons in JavaScript

Mark the end of a statement:

```js
let x = 10;
let y = 20;
```

They help avoid execution errors.

---

# Comments in JavaScript

### Single-line  
```js
// This is a comment
```

### Multi-line  
```js
/*
This comment spans
multiple lines
*/
```

---

# JavaScript as a Dynamically Typed Language

Type is determined at runtime:

```js
let error = 404;       // number
error = "Not Found";   // now a string
```

---

# Using the typeof Operator

Checks data type:

```js
typeof 25;        // "number"
typeof true;      // "boolean"
```

Famous quirk:

```js
typeof null; // "object"
```

---
