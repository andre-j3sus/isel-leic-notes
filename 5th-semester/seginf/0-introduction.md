# Computer Security

## Syllabus

### 1st Part - Cryptographic Mechanisms and Protocols

* Cryptographic schemes;
* Authentication methods of public keys;
* Authentication protocols and key exchange;

### 2nd Part - Authentication and Authorization

* Password based authentication;
* Protocols to distributed identity management and authorization;
* Study cases: OpenID Connect, OAuth 2.0;
* Models, policies and mechanisms of access control;
* Study cases: Access Control Lists (ACL), Role-based access control (RBAC).

---

## Fundamentals

* **Security: information protection**;
* Prevent and detect non-authorized actions;
* 3 main properties:
  * **Confidentially**;
  * **Integrity**;
  * **Availability**.

### Confidentially

* Prevent the divulgation of non-authorized information:
  * Hide content from non authorized users;
  * Information cannot be seen neither analyzed;
* Privacy:
  * Includes means to ensures what information can be seen an by who.

### Integrity

* Ensure that the information/data received is exactly as the data sent from an authorized entity;
  * The content cannot be modified, corrupted or lost by others;
* Ensures authenticity:
  * Ensures that the involved entity is, in fact, the one she claims to be;
  * Authenticity is often defined ad a fourth principle;
* Also includes prevent that entities refuse to generate information: non-repudiation.

### Availability

* Information is accessible and usable on demand by an authorized entity;
* Prevent the denial of service (DoS).

---

## Information Protection

* Information and data are in:
  * Storage devices;
  * Computer networks;
* Protection can be on different levels:
  * **Hardware** - processing devices, storage, ...;
  * **Software** - operating system, applications, libraries, ...;
  * **Data** - files, databases, passwords, ...;
  * **Communication** - routers, ...

### [Attack Examples](https://techblogmu.blogspot.com/2017/03/types-of-attacks-or-security-attacks.html)

#### Passive attacks - Interception

* **Content divulgation**: attacker reads the content of the information;
* **Traffic analysis**: attacker analyzes the traffic to extract information;

#### Active attacks - Interruption, modification, fabrication

* **Masquerade**: attacker impersonates an authorized entity;
* **Replay**: attacker captures a data unit and replays it to produce an authorized action;
* **Message modification**: attacker modifies the content of a data unit;
* **Denial of service**: attacker prevents the information from being available.

---
---

## Introduction to Cryptography

* **Cryptography**: science of encoding information;
* **Cryptoanalysis**: science of decoding information;
* **Cryptology**: science that studies cryptography and cryptoanalysis;

**Components**:

* **Cypher function (E)**: generates a cryptogram c from a message m;
* **Decipher function (D)**: generates m' from c (expected to be equal to m);
* **Key (K)**: used by E and D to generate c and m';
* **Key generation function (G)**: generates a key K.

---

### [Ceaesar Cypher](https://en.wikipedia.org/wiki/Caesar_cipher)

* Simple substitution cypher;
* *The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the alphabet.*
* k can be any integer between 0 and 25;
* Can be easily broken by frequency analysis and brute force.

G = k = 3

E(k)(mi) = (mi + k) mod 26 = ci

D(k)(ci) = (ci - k) mod 26

Instead of shifting the alphabet, we can shuffle it: **monoalphabetic substitution cypher**.

---

### [Vigenère Cypher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

* Polyalphabetic substitution cypher;
* Uses the *tabula recta*;
* Key is a alphabet sequence;
* Aligns the key with the plaintext and uses the corresponding cyphertext letter;

G = k

E(k)(mi) = (mi + k(i mod x)) mod 26 = ci

D(k)(ci) = (ci - k(i mod x)) mod 26
