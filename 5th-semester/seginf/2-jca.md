# [Java Cryptography Architecture (JCA)](https://docs.oracle.com/javase/8/docs/technotes/guides/security/crypto/CryptoSpec.html)

> *The JCA is a major piece of the platform, and contains a "provider" architecture and a set of APIs for digital signatures, message digests (hashes), certificates and certificate validation, encryption (symmetric/asymmetric block/stream ciphers), key generation and management, and secure random number generation, to name a few.*

## Architecture

* **Cryptographic Service Provider (CSP)** - package or set of packages that implement one or more cryptographic mechanisms;
* **Engine Classes**
  * Abstract definition of a cryptographic mechanism;
  * Object creation is done through static `getInstance` methods;
* **Specification Classes** - normalized and transparent representations of cryptographic objects, such as keys and algorithm parameters.

### Providers

* Provides the implementation for the engine classes;
* `Provider` class is the base for all providers;
* Installation:
  * Put package in *classpath* or in extensions directory;
  * Register in `java.security` file;
  * Use `Security` class, alternatively;
* `Security` class:
  * Dynamic registration of providers;
  * Listing of providers and algorithms.

---

### Engine Classes

* Concrete algorithms and concrete implementations (providers) are identified by strings;
* **Delayed Provider Selection**
  * Provider selection is delayed until key initialization;
  * Allows provider selection based on the concrete type of the key;
* Classes:
  * `Cipher`;
  * `Mac`;
  * `Signature`;
  * `MessageDigest`;
  * `KeyGenerator`;
  * ...
* Factory methods:
  * `getInstance(String algorithm)` - default provider;
  * `getInstance(String algorithm, String provider)` - specific provider;
  * `getInstance(String algorithm, Provider provider)` - specific provider;

#### Cipher Class

* Constructor arguments:
  * Operation mode (encrypt, decrypt, wrap or unwrap);
  * Key;
  * Algorithm-specific parameters;
  * Random generator;
* Methods:
  * `update` - continues incremental cipher operation;
  * `doFinal` - finishes incremental cipher operation;
  * `wrap` - encrypts a key;
  * `unwrap` - decrypts a key.
  
#### Streams

* `CipherInputStream` - processes (encrypts or decrypts) the read bytes;
* `CipherOutputStream` - processes (encrypts or decrypts) the written bytes.
* `DigestInputStream` - processes (hashes) the read bytes;
* `DigestOutputStream` - processes (hashes) the written bytes.

#### Parameters

* `AlgorithmParameters` - algorithm configuration parameters;
* Example: `IvParameterSpec` - initialization parameters for a symmetric cipher algorithm;
* Generation through `AlgorithmParameterGenerator`.

#### Keys

* `Key` interface:
  * `String getAlgorithm()`;
  * `String getFormat()`;
  * `byte[] getEncoded()`;
* Interfaces that extend `Key` (but do not add methods):
  * `SecretKey` - symmetric key;
  * `PrivateKey` - private key;
  * `PublicKey` - public key;
* `KeyPair` class - pair of keys **PublicKey** and **PrivateKey**;
* Classes `KeyGenerator` and `KeyPairGenerator` for key generation.
* **Opaque** keys - representations of keys without access to their constituents;
* **Transparent** keys - representations of keys with access to their constituents.
* `KeyFactory` class - **conversion** between opaque and transparent keys.

#### Mac Class

* Constructor arguments:
  * Key;
  * Algorithm-specific parameters;
* Methods:
  * `update` - continues the incremental operations;
  * `doFinal` - finishes the incremental operation and returns the MAC value.

#### Signature Class

* Constructor arguments:
  * `initSign` method: private key and random generator;
  * `initVerify` method: public key;
* Signature generation/verification methods:
  * `update` - continues incremental operation;
  * `sign` - finishes incremental operation and returns the signature;
  * `verify` - finishes incremental operation and verifies the signature.

#### KeyStore Class

* Stores keys and certificates;
* Representation through the `KeyStore` class;
* Three types of entries:
  * Private keys and certificates;
  * Symmetric keys;
  * Trust anchors (certificates);
* Password-based protection;
  * Repository integrity - one password per repository;
  * Entry confidentiality - one password per entry;
* Entries extend the `Entry` interface:
  * `PrivateKeyEntry` - private key and certificate;
  * `SecretKeyEntry` - symmetric key;
  * `TrustedCertificateEntry` - trust anchor (certificate).