# [Java Cryptography Architecture (JCA)](https://docs.oracle.com/javase/8/docs/technotes/guides/security/crypto/CryptoSpec.html)

> *The JCA is a major piece of the platform, and contains a "provider" architecture and a set of APIs for digital signatures, message digests (hashes), certificates and certificate validation, encryption (symmetric/asymmetric block/stream ciphers), key generation and management, and secure random number generation, to name a few.*

---

## Arquitetura

Arquitetura baseada em:

* **CSP (Cryptographic Service Provider)** - package ou conjunto de packages que implementam um ou mais mecanismos criptográficos;
* **Engine Classes**
  * Definição abstrata dum mecanismo criptográfico;
  * Criação dos objetos realizada através de métodos estáticos `getInstance`;
* **Specification Classes** - representações normalizadas e transparentes de objetos criptográficos, tais como chaves e parâmetros de algoritmos;

### Providers

* Fornecem a implementação para as engines classes;
* Class `Provider` é base para todos os providers;
* Instalação:
  * Colocar package na classpath ou na diretoria de extensões;
  * Registar no ficheiro java.security;
  * Usar a classe Security, em alternativa.
* Classe `Security`:
  * Registo dinâmico de providers;
  * Listagem de providers e algoritmos.

---

### Engine Classes

* Os algoritmos concretos e as implementações concretas (providers) são
identificados por strings;
* **Delayed Provider Selection**
  * A seleção do provider adequado é adiada até à iniciação com a chave;
  * Permite a seleção do provider com base no tipo concreto da chave.

#### Cipher Class

* Parâmetros de inicialização:
  * Modo de operação (cifra, decifra, wrap ou unwrap);
  * Chave;
  * Parâmetros específicos do algoritmo;
  * Gerador aleatório;
* Métodos de cifra:
  * `update` - continua a operação de cifra incremental;
  * `doFinal` - termina a operação de cifra incremental;
  * `wrap` - cifra uma chave;
  * `unwrap` - decifra uma chave.
  
#### Streams

* `CipherInputStream` - processa (cifra ou decifra) os bytes lidos;
* `CipherOutputStream` - processa (cifra ou decifra) os bytes escritos.
* `DigestInputStream` - processa (hash) os bytes lidos;
* `DigestOutputStream` - processa (hash) os bytes escritos.

#### Parameters

* `AlgorithmParameters` - parâmetros de inicialização de um algoritmo;
* Exemplo: `IvParameterSpec` - parâmetros de inicialização de um algoritmo de cifra simétrica.
* Geração através de `AlgorithmParameterGenerator`.

#### Keys

* Interface `Key`;
  * `String getAlgorithm()`;
  * `String getFormat()`;
  * `byte[] getEncoded()`;
* Interfaces que estendem `Key` (mas não acrescentam métodos):
  * `SecretKey` - chave simétrica;
  * `PrivateKey` - chave privada;
  * `PublicKey` - chave pública;
* Classe `KeyPair` - par de chaves **PublicKey** e **PrivateKey**;
* Geração através das classes `KeyGenerator` e `KeyPairGenerator`.
* Chaves **opacas** - representações de chaves sem acesso aos seus constituintes;
* Chaves **transparentes** - representações de chaves com acesso aos seus constituintes.
* Class `KeyFactory` - **conversão** entre chaves opacas e transparentes.

#### Mac Class

* Parâmetros de inicialização:
  * Chave;
  * Parâmetros específicos do algoritmo
* Métodos:
  * `update` - continua a operação incremental;
  * `doFinal` - termina a operação incremental e retorna o valor do MAC.

#### Signature Class

* Parâmetros de inicialização:
  * Método `initSign`: chave privada e gerador aleatório;
  * Método `initVerify`: chave pública;
* Métodos de geração/verificação de assinatura:
  * `update` - continua a operação incremental;
  * `sign` - termina a operação incremental e retorna a assinatura;
  * `verify` - termina a operação incremental e verifica a assinatura.

#### KeyStore Class

* Armazena chaves e certificados;
* Representação através da classe `KeyStore`;
* Três tipos de entrada:
  * Chaves privadas e certificados;
  * Chaves simétricas;
  * Certificados de confiança (trust anchors);
* Proteção baseada em passwords;
  * Integridade do repositório - uma password por repositório;
  * Confidencialidade das entradas - uma password por entrada;
* Entradas estendem a interface `Entry`:
  * `PrivateKeyEntry` - chave privada e certificado;
  * `SecretKeyEntry` - chave simétrica;
  * `TrustedCertificateEntry` - certificado de confiança.