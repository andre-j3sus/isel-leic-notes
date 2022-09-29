# [Express JS](https://expressjs.com/)

* **Backend web framework** for Node.js;
* Used to develop **web applications and APIs**;
* Based on **middleware**;

### Middleware

* A **middleware** is a function that has access to the r**equest and response objects**, and **the next middleware** in the application's request-response cycle.
* Performs the following tasks:
  * Execute any code;
  * Change the request and response objects;
  * End the request-response cycle;
  * Call the next middleware in the stack.

---

## express()

> To create an Express application, we use the `express()` function:

```js
const express = require('express');
const app = express();
```

### Methods

* `express.json([options])`: **parses** incoming requests with **JSON payloads**;
* `express.Router([options])`: creates a new **router object**;
* `express.static(root, [options])`: serves static files from the specified `root` directory;
* `express.text([options])`: parses incoming requests with **text payloads**;
* `express.urlencoded([options])`: parses incoming requests with **URL-encoded payloads**;

---

## Application

> The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module.

A application object has methods for:
* **Routing HTTP requests**;
* **Configuring middleware**;
* **Rendering HTML views**;
* Registering a **template engine**;

### Methods

* `app.all(path, callback [, callback ...])`: **matches** all **HTTP verbs**;
* `app.get(name)`: returns the **value** of **setting** `name`;
* `app.listen([port[, host[, backlog]]][, callback])`: **binds** and **listens** for **connections** on the specified `host` and `port`;
* `app.METHOD(path, callback [, callback ...])`: **matches** `METHOD` **HTTP verb**;
* `app.render(view, [locals], callback)`: **renders** a **view** and **writes** the result to the **response**;
* `app.route(path)`: **creates** a **new route** with the specified `path`;
* `app.set(name, value)`: sets the **value** of **setting** `name` to `value`;
* `app.use([path,] callback [, callback ...])`: **mounts** the specified **middleware** function or **functions** at the specified `path`.

---

## Request

> The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

### Properties

* `req.app`: the **Express** application;
* `req.body`: **parsed** **body**;
* `req.cookies`: **cookie** **parser**;
* `req.hostname`: **hostname** derived from the **Host** HTTP header;
* `req.ip`: **remote** **address** of the **request**;
* `req.method`: **request** **method**;
* `req.params`: **route** **parameters**;
* `req.path`: **path** **part** of the **request** **URL**;
* `req.protocol`: **request** **protocol** string;
* `req.query`: **query** **string** **parameters**;
* `req.res`: the **response** object;
* `req.route`: the **current** **route**.

---

## Response

> The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

### Methods

* `res.cookie(name, value [, options])`: sets **cookie** `name` to `value`;
* `res.clearCookie(name [, options])`: clears the **cookie** `name`;
* `res.end([data][, encoding][, callback])`: **ends** the **response** process;
* `res.get(field)`: returns the **value** of **HTTP** header `field`;
* `res.json([body])`: sends a **JSON** response;
* `res.redirect([status,] path)`: redirects to the **URL** derived from the specified `path`, with specified `status`, a positive **integer** that corresponds to an **HTTP** status code;
* `res.render(view [, locals] [, callback])`: **renders** a **view** and **writes** the result to the **response**;
* `res.req`: the **request** object;
* `res.send([body])`: sends the **HTTP** response;
* `res.sendStatus(statusCode)`: sets the **response** **status** **code** to `statusCode` and **sends** its **string** representation as the **response** **body**.
* `res.set(field [, value])`: sets the **HTTP** header `field` to `value`, **merging** with the existing **header** `field` if it exists.

---

## Router

> A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.

### Methods

* `router.all(path, callback [, callback ...])`: **matches** all **HTTP verbs**;
* `router.METHOD(path, callback [, callback ...])`: **matches** `METHOD` **HTTP verb**;
* `router.use([path,] callback [, callback ...])`: **mounts** the specified **middleware** function or **functions** at the specified `path`.