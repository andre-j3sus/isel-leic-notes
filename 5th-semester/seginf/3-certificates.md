# Certificates

> A digital certificate is a file or electronic password that proves the authenticity of a device, server, or user through the use of cryptography and the public key infrastructure (PKI).

## [Certificados X.509](https://en.wikipedia.org/wiki/X.509)

* **Emissor**: autoridade de certificação (AC);
* **Conteúdo**: associação entre uma chave pública e um nome (identidade);
* **Atributos**: nome, validade, extensões, ...
* **Assinatura do emissor**: assinatura digital realizada com a chave privada da AC.

---

## Cadeia de Certificação

* **Cadeia de certificação**: conjunto de certificados que permite a validação de um certificado;
* **Recursão**: Obter chave pública -> Validar Certificado -> Obter chave pública -> Validar Certificado -> ...
* Condição de paragem: **trust anchor** - certificado auto-assinado.

### Certificados e chaves privadas

* Os certificados guardam apenas a chave pública;
* A chave privada fica "associada" ao certificado em armazenamento seguro (por exemplo, no cartão de cidadão).

### Extensões

* As extensões são a forma normalizada de acrescentar informação não considerada na norma base;
* Constituição duma extensão:
  * Identificador da extensão;
  * Valor da extensão;
  * Flag critical (se verdadeira, a extensão não pode ser ignorada);
* Perfil:
  * Conjunto de extensões e respetiva semântica, usadas para um determinado propósito;
  * E.g. PKIX, S/MIME, ...

---

## [Perfil PKIX - Public Key Infrastructure for the Internet](https://www.rfc-editor.org/rfc/rfc5280)

Algumas extensões:

* **Authority Key Identifier** – identificador da chave do emissor;
* **Subject Key Identifier** – identificador da chave do subject;
* **Key Usage** – usos permitidos para o par de chaves;
* **Alternative Name** – nome alternativo (email, IP, URI);
* **Policy Identifiers** – identificador de política;
* **Basic Constraints** – restrições ao uso do certificado;
* **Name Constraints** – restrições ao espaço de nomes do certificado;
* **Policy Constraints** – restrições de política;
* **Extended Key Usage** – usos permitidos para o par de chaves;
* **CRL Distribution Points** – pontos de distribuição das listas de revogação.

---

## Certificados e PKIX na JCA

### Certificate e CertificateFactory

* `Certificate`: representação abstrata de um certificado;
* `X509Certificate`: representação concreta de um certificado X.509;
* `CertificateFactory`: engine class para a criação de certificados ou cadeias de certificados com base na sua representação codificada, tipicamente em stream;
* `X509Extension`: interface para extensões de certificados X.509.

### KeyStore

* **Armazenamento de chaves e certificados**;
* Representação através da classe `KeyStore`;
* Tem três tipos de entradas:
  * `KeyStore.PrivateKeyEntry`: chave privada e certificado;
  * `KeyStore.SecretKeyEntry`: chave secreta;
  * `KeyStore.TrustedCertificateEntry`: certificado de confiança;
* Proteção baseada em **passwords**:
  * **Integridade** de todo o repositório - **uma password por repositório**;
  * **Confidencialidade** de cada entrada - **uma password por entrada**;
* Formatos de ficheiro:
  * `JKS` (Java KeyStore);
  * `JCEKS` (Java Cryptography Extension KeyStore);
  * `PKCS12` (Personal Information Exchange Syntax Standard).

### CertPath e CertPathValidator

* `CertPath`: representação de uma **cadeia de certificação**;
* `CertPathValidator`: engine class para a **validação** de cadeias de certificação;
* Parametrização:
  * Conjunto de **trust anchors** - define os issuers dos certificados iniciais da cadeia;
  * Conjunto de **certificados** (`CertStore`);
  * Selector (`X509CertSelector`) - define os requisitos para o certificado final da cadeia;