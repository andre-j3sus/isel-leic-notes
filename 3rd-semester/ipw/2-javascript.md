# [JavaScript](https://eloquentjavascript.net/)

* **Lightweight**, **interpreted**, **object-oriented** language with first-class functions;
* **Just-in-time** compiled;
* Multi-paradigm: **imperative**, **functional**, **event-driven**, **prototype-based** and **single-threaded**;
* **Weakly typed**;

---
---

## Basics

### Variables, Values and Types

* **Variables** are declared with the `var` or `let` keyword (prefer `let` over `var`).
* **Constants** are declared with the `const` keyword.

The following are **primitive types**:
* `Number` (64-bit floating point);
* `String` (immutable);
* `Boolean` (true or false);
* `Null` (only one value, null);
* `Undefined` (only one value, undefined);
* `Symbol` (unique and immutable);
* `BigInt` (arbitrary precision integers).
* `Object` (collection of properties); defined with `{}`.

**Note**: the variable type is not fixed, it can change during the program execution.

* The `typeof` operator returns the type of a value;
* To print a value to the console, use `console.log(value)`.
* To add a comment, use `//` or `/* ... */`.

### Operators

* **Arithmetic** operators: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`;
* **Assignment** operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`;
* **Comparison** operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`;
* **Logical** operators: `&&`, `||`, `!`;
* **Bitwise** operators: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`;

### Control Flow

* **If-else** statements: `if (condition) { ... } else { ... }`;
* **Switch** statements: `switch (expression) { case value: ... break; default: ... }`;
* **While** loops: `while (condition) { ... }`;
* **Do-while** loops: `do { ... } while (condition)`;
* **For** loops: `for (let i = 0; i < 10; i++) { ... }`;
* **For-in** loops: `for (let property in object) { ... }`;
* **For-of** loops: `for (let element of array) { ... }`;

### Functions

To define a function, use the `function` keyword:

```js
function functionName(parameter1, parameter2, ...) {
    // Body
}
```

---

### Objects

Objects are collections of properties. They are defined with `{}`:

```js
const object = {
    property1: value1,
    property2: value2,
    ...
};

// Accessing properties
object.property1;
object["property1"];

// Adding properties
object.property3 = value3;
object["property3"] = value3;

// Deleting properties
delete object.property1;
delete object["property1"];
```

#### Methods:

* `Object.keys(object)` returns an **array** containing the **names** of **all the enumerable properties** of the object;
* `Object.values(object)` returns an **array** containing the **values** of **all the enumerable properties** of the object;
* `Object.entries(object)` returns an **array** containing the **names and values** of all the enumerable properties of the object;
* `Object.fromEntries(array)` returns an **object** created from the given **array of key-value pairs**.

#### Constructors

* **Blueprints** for creating objects:

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
const person2 = new Person("Mary", 25);

console.log(person1.name); // John
```

* Its not possible to add properties to a constructor during runtime;
* **Prototypes** are the mechanism by which JavaScript objects inherit features from one another;
* With prototypes, you can add new properties to existing objects:

```js
Person.prototype.nationality = "English";
```

---

### Arrays

Arrays are ordered collections of values. They are defined with `[]`:

```js
const array = [value1, value2, ...];
// Or
const array = new Array(value1, value2, ...);

// Accessing elements
array[0];

// Array length
array.length;

// Adding elements
array.push(value);
array.unshift(value);

// Removing elements
array.pop();
array.shift();
```

---

### Scope and Use Strict

* `this` refers to the object that the function is a property of;
  * **Object methods** have access to the object as `this`;
  * **Alone**, `this` refers to the **global object** (window in browsers);
  * **Functions with normal mode**, `this` refers to the g**lobal object**;
  * **Functions with strict mode**, `this` is **undefined**;

* To use **strict mode**, use the `"use strict"` directive;
* Helps to avoid common errors and have better syntax;
* Its not allowed to:
  * Use a variable without declaring it;
  * Delete variables or functions;
  * Parameters with the same name;
  * etc.

---
---

## JS Async

> Asynchronous functions are functions that execute in parallel with other functions. They are non-blocking, meaning that they do not wait for the previous function to finish executing before running.

### Callbacks

* `setTimeout(function, milliseconds)`: runs a function **after** a specified number of milliseconds;
* `setInterval(function, milliseconds)`: runs a function **repeatedly**, after a specified number of milliseconds;
* `clearTimeout(id)` and `clearInterval(id)`: **stops the execution** of the function with the specified **ID**, returned by `setTimeout` or `setInterval`.

---

### Promises

* **Asynchronous** operations return a **promise**;
* Represents the **eventual** completion (or failure) of an **asynchronous operation** and its resulting value;
* Has two properties:
  * `state`: **pending**, **fulfilled** or **rejected**;
  * `result`: **undefined**, a value or an error;
* Has three states:
  * **Pending**: initial state, neither fulfilled nor rejected;
  * **Fulfilled**: meaning that the operation was completed successfully;
  * **Rejected**: meaning that the operation failed;

| State     | Result    |
| --------- | --------- |
| Pending   | undefined |
| Fulfilled | a value   |
| Rejected  | an error  |

To create a promise, use the `new Promise()` constructor:

```js
const promise = new Promise((resolve, reject) => {
    // Code
    resolve(value); // fulfilled
    reject(error); // rejected
});
```

* `resolve` and `reject` are **functions** that **change the state** of the promise;

#### Promise methods

* `then(onFulfilled, onRejected)`: **executes** the **callback** function when the promise is **fulfilled**;
* `catch(onRejected)`: **executes** the **callback** function when the promise is **rejected**;
* `finally(onFinally)`: **executes** the **callback** function when the promise is **fulfilled or rejected**:

```js
promise
    .then((value) => {
        // Code
    })
    .catch((error) => {
        // Code
    })
    .finally(() => {
        // Code
    });
```

#### Promise static methods

* `Promise.all(iterable)`: returns a **promise** that **resolves** when **all** of the **promises** in the **iterable** argument have **resolved** or when the **iterable** argument contains no promises;
* `Promise.allSettled(iterable)`: returns a **promise** that **resolves** after **all** of the **given promises** have either **fulfilled** or **rejected**;
* `Promise.any(iterable)`: returns a **promise** that **resolves** after **any** of the **given promises** have **fulfilled** or after **all** of the **given promises** have **rejected
* `Promise.race(iterable)`: returns a **promise** that **resolves** or **rejects** as soon as **one** of the **promises** in the **iterable** resolves or rejects, with the **value** or **reason** from that promise;
* `Promise.resolve(value)`: returns a **promise** that **resolves** with the given **value**;
* `Promise.reject(reason)`: returns a **Promise** object that is **rejected** with the given **reason**.

---

### Async/Await

* **Async functions** are functions that **return a promise**;
* **Await** can only be used inside **async functions**;
* `async function functionName() { ... }`;
* `await promise`: **waits** for the **promise** to be **fulfilled** or **rejected**;