# Cryptography

## Summary

* Hierarquia de mecanismos criptográficos;
* Esquemas criptográficos:
  * Esquemas simétricos de cifra;
  * Esquemas MAC;
* Primitivas de cifra e modos de operação.

---

## Mecanismos criptográficos

* **Primitivas**:
  * operações matemáticas usadas como **blocos construtores** na realização de esquemas;
  * e.g. DES, AES, RSA, ECC, etc;
* **Esquemas**:
  * **combinação de primitivas** e métodos adicionais para a realização de tarefas criptográficas como a cifra e a assinatura digital;
  * e.g. DES-CBC-PKCS5Padding, RSA-OAEP, etc;
* **Protocolos**:
  * **sequências de operações** realizadas por uma ou mais entidades, envolvendo **esquemas e primitivas**;
  * e.g. TLS, TLS_RSA_WITH_AES_128_CBC_SHA, etc.

Os esquemas podem ser classificados em:

* **Esquemas simétricos**:
  * Cifra e autenticidade;
  * **Chave secreta e utilizada por ambas as partes**;
  * e.g. DES, AES, etc;
  * Mais rápido, mas não tão seguro;
* **Esquemas assimétricos**:
  * Cifra e assinatura digital;
  * **Chave pública para cifrar e chave privada para decifrar**;
  * Mais seguro, mas mais lento;

|                   | Simétrico       | Assimétrico        |
| ----------------- | --------------- | ------------------ |
| Confidencialidade | Cifra simétrica | Cifra assimétrica  |
| Autenticidade     | MAC             | Assinatura Digital |

---

### Criptografia simétrica

* Processo de proteção e desproteção usa a **mesma chave**;
* Chaves são normalmente usadas durante um curto período de tempo;
* Chaves são estabelecidas após um **processo de negociação** entre quem cifra e quem decifra;

### Cifra simétrica

* Algoritmos (G, E, D):
  * G - função **probabilística** de geração de chaves;
    * G :-> Keys;
  * E - função **probabilística** de cifra;
    * E: Keys -> {0, 1}* -> {0, 1}*;
  * D - função **determinística** de decifra;
    * D: Keys -> {0, 1}* -> {0, 1}*.

#### Propriedades

* **Propriedade da correção**;
* **Propriedade de seguranç**a: é computacionalmente infazível encontrar m (texto em claro) a partir de c (texto cifrado), sem o conhecimento da chave k;
* **Esquema simétrico**: utilização da mesma chave k nas funções E e D;
* Mensagem m e criptograma c são sequências de bytes com **dimensão variável ({0,1}*)**;
* **Não garante integridade dos dados**;

---

### Esquema MAC (Message Authentication Code)

* Algoritmos (G, T, V):
  * G - função **probabilística** de geração de chaves;
    * G :-> Keys;
  * T - função **probabilística** de geração de marcas (Tags);
    * T: Keys -> {0, 1}* -> Tags;
  * V - função **determinística** de verificação de marcas (Tags);
    * V: Keys -> ( Tags x {0, 1}* ) -> {true, false}.

#### Propriedades

* **Propriedade da correção**;
* **Propriedade de segurança** - sem ter conhecimento de k, é computacionalmente infazível:
  * falsificação seletiva - dado m, encontrar t tal que V(k)(t, m) = true;
  * falsificação existencial - encontrar o par (m, t) tal que V(k)(t, m) = true;
* **Esquema simétrico**: utilização da mesma chave k nas funções T e V;
* Mensagem m é uma sequência de bytes de dimensão variável;
* Marca **t (tag)** tem tipicamente **dimensão fixa** (e.g. 160, 256 bits);
* Códigos detetores e corretores de erros não servem para esquemas de MAC.

---

## Primitivas de cifra simétrica

* Primitiva de cifra em bloco:
* **n** - dimensão do bloco;
* **l** - dimensão da chave;
  * Função E: {0, 1}^l -> {0, 1}^n -> {0, 1}^n;
  * Função D: {0, 1}^l -> {0, 1}^n -> {0, 1}^n;

### Características

* A dimensão n do bloco deve ser suficientemente elevada para impossibilitar ataques baseados na estatística do texto em claro;
* A dimensão l da chave deve ser suficientemente elevada para impossibilitar ataques baseados na força bruta;

---

### Modos de operação

* Padrões no texto em claro não deverão ser evidentes no texto cifrado;
* A dimensão do texto cifrado deve ser aproximadamente igual à dimensão do texto em claro;
* **Acesso aleatório** - capacidade de decifrar e alterar apenas parte do criptograma.

#### Modo Electronic Code Book (ECB)

* A primitiva garante que os **padrões do bloco em claro não são evidentes no bloco cifrado**;
* Blocos de **texto em claros iguais**, cifrados com a **mesma chave**, implicam blocos de **texto cifrado iguais**;
* A cifra é realizada de forma independente em cada bloco - **Interdependência na cifra**;
* A ocorrência de erros num bloco de texto cifrado afeta apenas a decifra desse bloco - **Propagação de erros**;
* Permite acesso aleatório para decifra e alteração de blocos de texto cifrado - **Acesso aleatório**.

#### Modo Cipher Block Chaining (CBC)

* Sob a mesma chave e sob o **mesmo vetor de iniciação (IV)**, duas mensagens **iguais implicam criptogramas iguais**;
* A cifra de um bloco de texto em claro afeta a cifra dos blocos seguintes - **Interdependência na cifra**;
* A ocorrência de erros num bloco cj de texto cifrado afeta a decifra do próprio bloco e a do seguinte cj+1 - **Propagação de erros**;
  * A decifra do bloco cj+1 terá erros nas mesmas posições que o bloco cj;
* A reordenação dos blocos de texto cifrado afeta a decifra;
* É relativamente fácil de manipular um determinado bloco de texto em claro.

##### Boas práticas sobre o IV

* Deve ser armazenado e transmitido em claro;
* Não deve ser reutilizado - **uniqueness**;
* Não deve ser previsível - **unpredictability**.

---

### Padding

* *Padding is a way to take data that may or may not be a multiple of the block size for a cipher and extend it out so that it is;*
* Seja X o número de bytes a acrescentar para que a dimensão da mensagem seja
múltipla da dimensão do bloco.

---

### Modo Counter (CTR)

* Sob a mesma chave e sob o mesmo vector de iniciação, duas mensagens iguais implicam
criptogramas iguais;
* A ocorrência de erros num bloco de texto cifrado cj afeta apenas a decifra desse bloco. O bloco cj resultante da decifra do bloco cj terá erros nas mesmas posições que cj;
* Permite acesso aleatório para decifra e recifra de bits;
* É relativamente fácil manipular um determinado bloco de texto em claro.

---

### Cifra autenticada

* Para garantir confidencialidade e simultaneamente autenticidade, tem de se usar uma combinação dos esquemas Cifra e MAC;
* Existem duas abordagens:
  * Encrypt-then-MAC
    * A marca indica se houve alteração ou não do criptograma;
  * MAC-then-encrypt
    * A marca é gerada sobre a mensagem, e é posteriormente tudo cifrado;
* Existem modos de operação cujo objetivo é produzirem uma cifra autenticada combinando as operações num só algoritmo:
  * Galois/Counter Mode (GCM);
  * Offset Codebook Mode (OCB);
  * Counter with CBC-MAC (CCM).

---
---

## Hash Functions

* **H: {0, 1}^* -> {0, 1}^n**;
  * **n** is the hash length;
* **Input** - binary sequence of finite length;
* **Output** - binary sequence of fixed length (n);

### Notes

* Propriedades de segurança:
  * É computacionalmente **fácil** obter H(x) dado x;
  * É computacionalmente **difícil** obter **x'**, dado x, tal que **x' != x e H(x') = H(x)** -> **segunda pré-imagem**;
  * É computacionalmente **difícil** obter **(x, x')**, com **x != x' e H(x) = H(x')** -> **colisão**;
* O hash de x serve como representante de x;
* Baseiam-se em operações booleanas e aritméticas sobre palavras de pequena dimensão (16, 32, 64 bits).

### Exemplos de aplicação

* Garantia de integridade de dados;
* Derivação de chaves a partir de passwords;
* Algoritmos de MAC;
* Assinatura digital (esquema assimétrico);
* Diversos protocolos criptográficos.

### Funções de hash com chave

* É usual designar-se um esquema de MAC, com algoritmo T determinístico, como função de hash com chave (Keyed-Hashing for Message Authentication, HMAC);
* HMAC é um conjunto de algoritmos MAC para usar com diferentes funções de hash H.