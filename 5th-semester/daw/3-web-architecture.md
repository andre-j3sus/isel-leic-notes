# [Web Architecture](https://www.w3.org/TR/webarch/)

> This chapter contains a review of the Web Architecture, studied in the [Introduction to Internet Programming](../../3rd-semester/ipw/) course.

* Web as an **information space** where the items of interest are **resources**;
* **Resource identification** via **Uniform Resource Identifiers** (URI) - **universal** resource identifiers;
* **Interaction** between agents and resources via interaction **protocols**, such as **HTTP**;
* Use of **formats** to represent state, namely resource state;
* **Media-types** as identifiers for formats;
* Use of **links in representations** as a way to relate resources in the information space;
* To discover more about the http protocol, check the [HTTP Protocol](../../3rd-semester/ipw/1-http.md) section.

---

## Representation Design

### [JSON Hypertext Application Language (HAL)](https://datatracker.ietf.org/doc/html/draft-kelly-json-hal)

* A **media-type** for **JSON** that provides a **standardized way to embed hypermedia links** in JSON responses;
* Links are represented in the special `_links` property of the JSON object:
  * The key of the `_links` property is the **relation** between the current resource and the linked resource;
  * The value of the `_links` property is an **array** of **link objects**, each containing a `href` property, which is the **URI** of the linked resource, a `title`, etc;
* **Embedded resources** represented in the special `_embedded` field;
* **No support** for representing **actions**, i.e., non-safe interactions.

### [Siren](https://github.com/kevinswiber/siren)

* A **hypermedia specification** for representing **entities**;
* Including actions representations in recourse representations: `actions` property;
* Grouping the non-link resource properties in the `properties` property;
* The `links` property is used to represent **navigational links** to other resources.F