# [OpenID Connect](https://openid.net/connect/)

> _OpenID Connect 1.0 is a simple identity layer on top of the [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749) protocol. It enables Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner._

---


## OAuth 2.0

> _OAuth 2.0 is the industry-standard protocol for authorization. OAuth 2.0 focuses on client developer simplicity while providing specific authorization flows for web applications, desktop applications, mobile phones, and living room devices.

Defines the following roles:

* **Resource Owner**: The entity that can grant access to a protected resource. When the resource owner is a person, it is referred to as an **end-user**;
* **Resource Server**: The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens;
* **Client**: An application making protected resource requests on behalf of the resource owner and with its authorization;
* **Authorization Server**: The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization.

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

**Access Token**: A string representing the authorization granted to the client by the resource owner. The string is usually opaque to the client.

**Refresh Token**: A token used to obtain a new access token when the current access token becomes invalid or expires, or to obtain additional access tokens with identical or narrower scope (access tokens may have a shorter lifetime and fewer permissions than authorized by the resource owner).

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

## [Participants](https://openid.net/specs/openid-connect-core-1_0.html#Overview)

* **End-User** (user): the person who is trying to access a resource in the client application, that **requires authentication**;
* **Relying Party - RP** (client): the client application that is trying to access a resource in the resource server;
* **OpenID Provider - OP** (authorization server): the server that stores the user's credentials and authenticates the user.

<!--Add image-->
```
+--------+                                   +--------+
|        |                                   |        |
|        |---------(1) AuthN Request-------->|        |
|        |                                   |        |
|        |  +--------+                       |        |
|        |  |        |                       |        |
|        |  |  End-  |<--(2) AuthN & AuthZ-->|        |
|        |  |  User  |                       |        |
|   RP   |  |        |                       |   OP   |
|        |  +--------+                       |        |
|        |                                   |        |
|        |<--------(3) AuthN Response--------|        |
|        |                                   |        |
|        |---------(4) UserInfo Request----->|        |
|        |                                   |        |
|        |<--------(5) UserInfo Response-----|        |
|        |                                   |        |
+--------+                                   +--------+
```

### Steps

1. The RP sends an authentication request to the OP;
2. The OP authenticates the user and obtains authorization;
3. The OP sends an authentication response to the RP;
4. The RP sends a request to the OP to obtain user information;
5. The OP sends a response to the RP with the user information.

---

## [ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken)

* **Set of claims** about the user;
* Claims carry information about the user;
* JWT (JSON Web Token) signed by the OP;
* Example:

```
  {
   "iss": "https://server.example.com",
   "sub": "24400320",
   "aud": "s6BhdRkqt3",
   "nonce": "n-0S6_WzA2Mj",
   "exp": 1311281970,
   "iat": 1311280970,
   "auth_time": 1311280969,
   "acr": "urn:mace:incommon:iap:silver"
  }
```   

* `iss` - the token issuer (OP);
* `sub` - the user identifier;
* `aud` - the audience (RP) - the client ID;
* `exp` - the expiration time;
* `iat` - the time the token was issued.

---

## UserInfo Endpoint

* Contains the **information of an authenticated user**;
* The **RP sends a request to the OP** to obtain user information;
* Response is a JSON object with the user information.