# [HTML - HyperText Markup Language](https://www.w3schools.com/html/html_intro.asp)

* Defines the **structure** of a **web page**;
* Consists of **elements** identified by **tags**;
* "Tells" the browser how to **display** the **content**;

---

## Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

* `<!DOCTYPE html>`: **declares** that this document is an **HTML5** document;
* `<html>`: **root element** of an **HTML page**;
* `<head>`: **contains** **meta** information about the **document**;
  * `<title>`: **specifies** a **title** for the **document**;
* `<body>`: **contains** the **visible page content**;
* `<h1>`: **defines** a **large heading**;
* `<p>`: **defines** a **paragraph**.

---

## Elements

* Consists of three **parts**:
  * **Opening tag**: `<tagname>`;
  * **Content**: `content`;
  * **Closing tag**: `</tagname>`;
* Some elements **do not** have a **closing tag** or **content**, they are called **empty elements**;
* Elements can have **attributes** to add additional information;
  * Attributes **always** have a **name** and a **value**;
  * They are **placed** inside the **opening tag**;

---

## Some Important Elements

* `<!-- comment -->`;
* `<a href="url">link text</a>`;
* `<br>` - **line break**;
* `<button>Click Me!</button>`;
* `<div>` - **division**;
* `<form action="url" action="GET"> Content </form>`;
* `<h1> to <h6>` - **headings**;
* `<hr>` - **horizontal rule**;
* `<img src="url" alt="alternative text">`;
* `<input type="text" name="firstname">` - **input field**; has many types for different input options;
* `<label for="name">First name:</label>` - **label** for an **input field**;
* `<nav>` - **navigation bar**;
* `<li>` - **list item**;
* `<ol>` - **ordered list**;
* `<p>` - **paragraph**;
* `<span>` - **span**;
* `<select>` - **drop-down list**;
  * `<option value="volvo">Volvo</option>`;
* `<table>` - **table**;
  * `<tr>` - **table row**;
  * `<th>` - **table header**;
  * `<td>` - **table data**;
* `<title>` - **title** of the **document**;
* `<ul>` - **unordered list**.

---
---

# [Handlebars](https://handlebarsjs.com/)

* **Logic-less** templating language;
* Uses a template and an input object to generate **HTML**;
* A HBS expression has the following **syntax**: `{{ content }}`;

## Helpers

* `{{#if}}` - **conditional**;
  * renders the **block** if the **value** is **truthy**;
  * can be **negated** with `{{#unless}}`;
  * can be **nested**;
  * can be **combined** with `{{else}}`:

```hbs
{{#if condition}}
  <p>Condition is true</p>
{{else}}
  <p>Condition is false</p>
{{/if}}
```	

* `{{#unless}}` - **conditional**;
  * renders the **block** if the **value** is **falsy**;
  * opposite of `{{#if}}`;

* `{{#each}}` - **iterates** over an **array**;
  * `this` - **current** item;
  * `@index` - **current** index;
  * `@key` - **current** key;
  * `@first` - **true** if **first** item;
  * `@last` - **true** if **last** item;

* `{{#with}}` - **conditional**;
  * renders the **block** if the **value** is **truthy**;
  * same as `{{#if}}` but **sets** the **context** to the **value** - `this` is the **value**;
  * can be combined with `{{else}}`:

To change to the context of the previous block, use `../`, as in the file system; e.g. `{{../name}}`.