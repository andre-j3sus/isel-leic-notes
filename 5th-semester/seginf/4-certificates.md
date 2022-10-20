# Certificates

> A digital certificate is a file or electronic password that proves the authenticity of a device, server, or user through the use of cryptography and the public key infrastructure (PKI).

## [Certificados X.509](https://en.wikipedia.org/wiki/X.509)

* **Issuer**: certification authority (CA);
* **Content**: association between a public key and a name (identity);S
* **Attributes**: name, validity, extensions, ...
* **Issuer's signature**: digital signature performed with the CA's private key.

<!-- Add image -->

---
---

## Certification Path

* **Certification path**: set of certificates that allows the validation of a certificate;
* **Recursion**: Get public key -> Validate Certificate -> Get public key -> Validate Certificate -> ...
* Stopping condition: **trust anchor** - self-signed certificate.

<!-- Add image -->

* Certificates **only store the public key**;
* The **private key** is "associated" with the certificate in a **secure storage** (for example, in the citizen card).

---
---

## Extensions

* Extensions are the **normalized way to add information** not considered in the base standard;
* Extension composition:
  * Extension **identifier**;
  * Extension **value**;
  * **Critical flag** (if true, the extension cannot be ignored);
* **Profile**:
  * **Set of extensions and semantics** used for a given purpose;
  * E.g. PKIX, S/MIME, ...

---

### [PKIX - Public Key Infrastructure for the Internet](https://www.rfc-editor.org/rfc/rfc5280)

Some extensions:

* **Authority Key Identifier** – identifier of the issuer's key;
* **Subject Key Identifier** – identifier of the subject's key;
* **Key Usage** – allowed uses for the key pair;
* **Alternative Name** – alternative name (email, IP, URI);
* **Policy Identifiers** – policy identifier;
* **Basic Constraints** – certificate usage restrictions;
* **Name Constraints** – name space restrictions for the certificate;
* **Policy Constraints** – policy restrictions;
* **Extended Key Usage** – allowed uses for the key pair;
* **CRL Distribution Points** – points of distribution of the revocation lists.

---
---

## Certificates and PKIX in JCA

### Certificate e CertificateFactory

* `Certificate`: abstract representation of a certificate;
* `X509Certificate`: concrete representation of an X.509 certificate;
* `CertificateFactory`: engine class for the creation of certificates or certificate chains based on their encoded representation, typically in stream;
* `X509Extension`: interface for X.509 certificate extensions.

### KeyStore

* **Certificates and keys storage**;
* Representation through the `KeyStore` class;
* Three types of entries:
  * `KeyStore.PrivateKeyEntry`: private key and certificate;
  * `KeyStore.SecretKeyEntry`: secret key;
  * `KeyStore.TrustedCertificateEntry`: trusted certificate;
* Password-based protection:
  * **Integrity** of the entire repository - **one password per repository**;
  * **Confidentiality** of each entry - **one password per entry**;
* File formats:
  * `JKS` (Java KeyStore);
  * `JCEKS` (Java Cryptography Extension KeyStore);
  * `PKCS12` (Personal Information Exchange Syntax Standard).

### CertPath e CertPathValidator

* `CertPaht`: certificate path representation;
* `CertPathValidator`: engine class for the **validation** of certificate chains;
* `CertPathBuilder`: engine class for the **construction** of certificate chains.
* Parameterization:
  * Set of **trust anchors** - defines the issuers of the initial certificates of the chain;
  * Certificate set (`CertStore`);
  * Selector (`X509CertSelector`) - defines the requirements for the final certificate of the chain.

<!-- TODO: Add diagrams -->