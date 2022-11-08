# Web Authentication

## HTTP (Review)

* **HTTP (HyperText Transfer Protocol)** is a protocol for **transferring data **between a client and a server;
* **Stateless**: the server does not remember the client, the requests are independent and without context;
* To maintain a state, the server uses **cookies**.

---

### HTTP Cookies

* Mechanism to **store and retrieve information** about the **client**;
* Maintains information about the **state of the client**;
* Used via HTTP headers;
* Contains:
  * Information about the client state, in the form of a **key-value pair**;
  * **Range of URLs** that the cookie is valid for;
  * **Expiration date**, if the cookie is persistent;
* **Can** be used to:
  * Create sessions;
  * Automatic login;
  * Register navigation history;
  * Register client preferences;
* **Cannot** be used to:
  * Access the client's hard drive;
  * Send viruses to the client.

#### Syntax and Usage

To create a cookie, the server sends a `Set-Cookie` header in the response:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```
A HTTP response can contain multiple `Set-Cookie` headers.

To retrieve a cookie, the client sends a `Cookie` header in the request:

```http
Cookie: <cookie-name>=<cookie-value>
```

* The attribute `expires` can be used to set the expiration date of the cookie, but the client can ignore it;
* For a server to delete a cookie, the client sends a `Set-Cookie` header with the `expires` attribute set to a past date.

---
---

## Authentication Process

* Phase 1:
  * **Verify the user's credentials** (e.g. username and password);
  * Obtain a **authenticator** (e.g. a token);
* Phase 2:
  * Presentation of the **authenticator** to the server.

Attacker goals:

* **Existencial falsification**: obtain a valid authenticator;
* **Selective falsification**: obtain a valid authenticator for a specific user;
* Obtain the **key used to generate** the authenticators.

---

### Authentication via Cookies

**Session identifier**:
* **Information about the session** is stored in the server;
* **Cookie** contains the **identifier to access the session information**;
* Should be **computationally infeasible** to create a valid session identifier.

**MAC**:
* **Information about the session** is stored in the cookie;
* Cookie protected by a **MAC**;
* If the confidentiality is a requirement, the cookie should be encrypted.

**Logout/Revocation**:
* Invalidate the session identifier;
* Put the cookie in a **blacklist**.

**Protection**:
* Transport via SSL - use of the flag `secure`;
* Client-side protection - use of the flag `httpOnly`.

---

### Authentication via Tokens

* **Token** is a **string** that **uniquely identifies** a user;
* A **token** is **generated** by the server and **sent** to the client;
* The client **sends** the token to the server in **every request**;
* The server **validates** the token and **sends** the response.

---

### HTTP Authentication

* There are **[two types](https://www.ietf.org/rfc/rfc2617.txt)** of HTTP authentication:
  * **Basic**: username and password are sent in **plain text**;
  * **Digest**: username and password are sent in a **hash**;

#### Basic Authentication

1. The client accesses a **protected resource**;
2. Server responds with a `401 Unauthorized` status code and a `WWW-Authenticate` header;
3. Client sends a `Authorization` header with the username and password in **base64**.

---

### [JSON Web Tokens (JWT)](https://jwt.io/)

> JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA.