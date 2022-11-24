# [OpenID Connect](https://openid.net/connect/)

> _OpenID Connect 1.0 is a simple identity layer on top of the [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749) protocol. It **enables Clients to verify the identity of the End-User** based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner._

> **Note:** See the [7. OAuth 2.0](7-oauth-2.0.md) section for more information about OAuth 2.0.

---

## [Participants](https://openid.net/specs/openid-connect-core-1_0.html#Overview)

* **End-User** (user): the person who is trying to access a resource in the client application, that **requires authentication**;
* **Relying Party - RP** (client): the client application that is trying to access a resource in the resource server;
* **OpenID Provider - OP** (authorization server): the server that stores the user's credentials and authenticates the user.

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
* **JWT** (JSON Web Token) signed by the OP;
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