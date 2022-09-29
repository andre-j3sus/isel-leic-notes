# [CSS - Cascading Style Sheets](https://www.w3schools.com/css/css_intro.asp)

* Defines the **look** and **layout** of a **web page**;
* Defines **how** **elements** are **displayed**;

## Syntax

* A **CSS rule-set** consists of a **selector** and a **declaration block**;
  * **Selector**: **element** to which the **style** will be applied:
    * Element selector - tag name; e.g. `p {...}`;
    * ID selector - `#id`; e.g. `#id {...}`;
    * Class selector - `.class`; e.g. `.class {...}`;
    * Universal selector - `*`; e.g. `* {...}`;
    * Grouping selector - `selector1, selector2, selector3 {...}`;
  * **Declaration block**: **properties** and **values**;
    * Properties - e.g. `color`;
    * Values - e.g. `red`;
    * Properties and values are separated by a colon;
    * Each property and value pair is separated by a semicolon;
    * Declaration block is surrounded by curly braces;

```css
selector {
  property: value;
}
```

## How to Add CSS

* **Inline** - inside an **element** using the `style` attribute;
* **Internal** - inside a **`<style>`** element, inside the **`<head>`** section;
* **External** - in an **external** **`.css`** file, referenced in the **`<head>`** section, using the **`<link>`** element;

---

# [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

* **Open-source** **CSS** **framework**;
* The main **purpose** of **Bootstrap** is to **simplify** the **development** of **responsive** **websites**;
* Has **built-in** **CSS** **classes** for **typography**, **forms**, **buttons**, **tables**, **images**, **icons**, **navigation**, **alerts**, **modals**, **cards**, **tooltips**, **popovers**, **carousels**, **and more**;