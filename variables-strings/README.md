
# 📘 JavaScript Variables and Strings 

---
### JavaScript Variables <img src="https://www.freecodecamp.org/learn/javascript-v9/review-javascript-variables-and-data-types/review-javascript-variables-and-data-types">

### Strings  <img src="https://www.freecodecamp.org/learn/javascript-v9/review-javascript-strings/review-javascript-strings">

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

- [Table of Contents of Strings](#Table-of-Contents-of-Strings)
- 
1. String Basics  
2. Accessing Characters  
3. Newline Character `\n`  
4. Escaping Strings  
5. Template Literals & String Interpolation  
6. ASCII, `charCodeAt()` & `fromCharCode()`  
7. Common String Methods  
8. Examples  

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


## **JavaScript Strings**

---

# Table of Contents
1. String Basics  
2. Accessing Characters  
3. Newline Character `\n`  
4. Escaping Strings  
5. Template Literals & String Interpolation  
6. ASCII, `charCodeAt()` & `fromCharCode()`  
7. Common String Methods  
8. Examples  

---

## 1. 🔹 String Basics

### **Definition**
A **string** is a sequence of characters wrapped in:
- single quotes `' '`
- double quotes `" "`
- backticks `` ` ` ``

Strings are:
- **primitive data types**
- **immutable**, meaning they cannot be changed after creation.

---

## 2. 🔹 Accessing Characters from a String

Use **bracket notation** to access characters by their **zero-based index**.

```javascript
const developer = "Jessica";
developer[0]; // J
```

---

## 3. 🔹 Newline Character `\n`

Creates a line break.

```javascript
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

---

## 4. 🔹 Escaping Strings

Use backslashes `\` to escape quotes.

```javascript
const statement = "She said, \"Hello!\"";
console.log(statement); 
// She said, "Hello!"
```

---

## 5. 🔹 Template Literals & String Interpolation

Template literals use **backticks** and allow embedding variables with `${ }`.

```javascript
const name = "Jessica";
const greeting = `Hello, ${name}!`; 
// "Hello, Jessica!"
```

---

## 6. 🔹 ASCII, `charCodeAt()` and `fromCharCode()`

### **ASCII**
A character encoding standard mapping characters to numbers.

### `charCodeAt()`
Returns ASCII code of character at a specific index.

```javascript
const letter = "A";
console.log(letter.charCodeAt(0));  // 65
```

### `fromCharCode()`
Converts ASCII code to its corresponding character.

```javascript
const char = String.fromCharCode(65);
console.log(char);  // A
```

---

## 7. 🔹 Common String Methods

### **indexOf()**
Searches substring; returns index or -1.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

### **includes()**
Checks if substring exists.

```javascript
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

### **slice()**
Extracts a portion of a string.

```javascript
const word = "freeCodeCamp";
console.log(word.slice(0, 4));  // "free"
console.log(word.slice(4, 8));  // "Code"
console.log(word.slice(8));     // "Camp"
```

### **toUpperCase()**

```javascript
"Hello, world!".toUpperCase(); // "HELLO, WORLD!"
```

### **toLowerCase()**

```javascript
"HELLO, WORLD!".toLowerCase(); // "hello, world!"
```

### **replace()**

```javascript
"I like cats".replace("cats", "dogs"); 
// "I like dogs"
```

### **replaceAll()**

```javascript
"I love cats and cats are fun".replaceAll("cats", "dogs");
```

### **repeat()**

```javascript
"Hello".repeat(3); // "HelloHelloHello"
```

### **trim(), trimStart(), trimEnd()**

```javascript
"  Hello, world!  ".trim();       // "Hello, world!"
"  Hello, world!  ".trimStart();  // "Hello, world!  "
"  Hello, world!  ".trimEnd();    // "  Hello, world!"
```

### **prompt()** *(browser only)*

```javascript
const answer = window.prompt("What's your favorite animal?");
```

---


