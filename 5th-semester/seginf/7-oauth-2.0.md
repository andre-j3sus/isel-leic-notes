# [OAuth 2.0](https://oauth.net/2/)

> _OAuth 2.0 is the industry-standard **protocol for authorization**. OAuth 2.0 focuses on client developer simplicity while **providing specific authorization flows** for web applications, desktop applications, mobile phones, and living room devices.

> **[Video](https://www.youtube.com/watch?v=t18YB3xDfXI)** with a good explanation of OAuth 2.0.

* **Main goal**: to provide a secure, conditioned, access to a resource, which the resource owner authorizes temporary access to a predetermined set of resources;

Defines the following roles:

* **Resource Owner**: The entity that can grant access to a protected resource. When the resource owner is a person, it is referred to as an **end-user**;
* **Client**: An application making protected resource requests on behalf of the resource owner and with its **authorization**; when the client registration is performed with the authorization server, the client is assigned a `client_id` and a `client_secret`, which is used to **authenticate** the client at the authorization server;
* **Resource Server**: The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens;
* **Authorization Server**: The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization; this server can also be the same as the resource server.

```
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+
```

> **Example:** A user (resource owner) wants to give access to a third-party application (client) to access his/her data (resource server). The user is redirected to the authorization server, where he/she is asked to authenticate and authorize the client. The authorization server then issues an access token to the client, which can be used to access the resource server.

---

## Access to Protected Resources

**Access Token**

* A string representing the **access credentials** for a given resource owner by a given client;
* The client uses the access token to **access the protected resources** hosted by the resource server on behalf of the resource owner;
* The string is usually **opaque to the client**.

There are four ways (**grant flows**) to obtain an access token:

* **Client Credentials**: The client requests an access token using only its client credentials;
* **Resource Owner Password Credentials**: The client requests an access token using its credentials and thE user password; only used when the client is **trusted**;
* **Authorization Code**: The client requests an access token using an authorization code, which the resource owner previously obtained;
* **Implicit**: The authorization code is returned to the client without an extra authorization code exchange step.

**Refresh Token**: A token used to obtain a new access token when the current access token becomes invalid or expires, or to obtain additional access tokens with identical or narrower scope (access tokens may have a shorter lifetime and fewer permissions than authorized by the resource owner).

> A **scope** represents the **type of access/authorization** being requested. The scope of access is expressed as a list of space-delimited, case-sensitive strings.

```
  +--------+                                           +---------------+
  |        |--(A)------- Authorization Grant --------->|               |
  |        |                                           |               |
  |        |<-(B)----------- Access Token -------------|               |
  |        |               & Refresh Token             |               |
  |        |                                           |               |
  |        |                            +----------+   |               |
  |        |--(C)---- Access Token ---->|          |   |               |
  |        |                            |          |   |               |
  |        |<-(D)- Protected Resource --| Resource |   | Authorization |
  | Client |                            |  Server  |   |     Server    |
  |        |--(E)---- Access Token ---->|          |   |               |
  |        |                            |          |   |               |
  |        |<-(F)- Invalid Token Error -|          |   |               |
  |        |                            +----------+   |               |
  |        |                                           |               |
  |        |--(G)----------- Refresh Token ----------->|               |
  |        |                                           |               |
  |        |<-(H)----------- Access Token -------------|               |
  +--------+           & Optional Refresh Token        +---------------+
```

---

## Front Channel and Back Channel

**Front Channel**:

* Communication channel between the **client and the authorization server**, via **user-agent redirection**;
* In case of error, the authorization server redirects the user-agent to the client's redirection URI with an error code and description;
* The `client_secret` never travels through the front channel.

**Back Channel**:

* Communication channel between the **client and the authorization server**;
* HTTP basic authentication is used to authenticate the client: `client_id` (username) and `client_secret` (password);

---

## Authorization Request

The client constructs the authorization request by adding the following parameters to the query string of the authorization endpoint URI:

* `response_type`: REQUIRED. The value MUST be one of `code`, `token`, or `id_token`;
* `client_id`: REQUIRED. The client identifier as described in [Section 2.2](https://tools.ietf.org/html/rfc6749#section-2.2);
* `redirect_uri`: OPTIONAL. As described in [Section 3.1.2](https://tools.ietf.org/html/rfc6749#section-3.1.2);
  * this parameter is also known as the **callback URI**;
* `scope`: OPTIONAL. The scope of the access request as described by [Section 3.3](https://tools.ietf.org/html/rfc6749#section-3.3);
* `state`: RECOMMENDED. An opaque value used by the client to maintain state between the request and callback. The authorization server includes this value when redirecting the user-agent back to the client. The parameter SHOULD be used for preventing **cross-site request forgery** as described in [Section 10.12](https://tools.ietf.org/html/rfc6749#section-10.12).
* `response_mode`: OPTIONAL. Informs the authorization server of the mechanism to be used for returning parameters from the authorization endpoint.
* `nonce`: OPTIONAL. String value used to associate a Client session with an ID Token, and to mitigate replay attacks. The value is passed through unmodified from the Authentication Request to the ID Token. Sufficient entropy MUST be present in the nonce values used to prevent attackers from guessing values.
