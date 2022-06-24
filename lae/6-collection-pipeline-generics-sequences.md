# [Collection Pipeline](https://martinfowler.com/articles/collection-pipeline/)

* Encadeamento de operações sobre dados que formam uma _query_;
* Uma collection é output de uma operação e input de outra.

<p align="center">
    <img src="./docs/collection-pipeline.png" alt="Collection Pipeline" align="center"/>
</p>

**Method Chaining:**

```
val result = listOf(1, 2, 3)
        .map { it * 2 }
        .filter { it > 5 }
        .distinct()
        .count()
```

**Nested Methods:**

```
val result = count(
    distinct(
        filter(
            map(
                listOf(1, 2, 3)
            ) { it * 2 }
        ) { it > 5 }
    )
)
```

---

# [Generics](https://kotlinlang.org/docs/generics.html)

Com a utilização de genéricos, obtém-se:

* Type safety;
* Expressividade;
* Casts implícitos.

Genéricos em classes: `class Fancy <T, ...> (...) {...}`

Genéricos em funções: `fun <T, ...> foo (...) {...}`


`out` keyword:

* e.g. `<out T>`;
* significa que podemos atribuir a esse parâmetro de tipo **superclasses de T**.

`in` keyword:

* e.g. `<in T>`;
* significa que podemos atribuir a esse parâmetro de tipo **subclasses de T**.

## Type Erasure

* Mecanismos que substitui todos os tipos genéricos por `Object`;
* Tipos genéricos não são preservados em runtime.

A solução é o uso de `reified type parameters` e `inline functions`.

[**Reified type**](https://kotlinlang.org/docs/inline-functions.html#reified-type-parameters):

* Permite o acesso à informação do tipo genérico;
* Declarados apenas em inline functions.

[**Inline function**](https://kotlinlang.org/docs/inline-functions.html):

* O compilador copia a função para onde esta é chamada, logo em bytecode não existe a instrução `invoke`.

---

# [Sequences](https://kotlinlang.org/docs/sequences.html)

* Semelhante a `Iterable`;
* **Lazy** (os elementos só são processados quando necessários).

**NOTA**: Iterable é **eager**, ou seja, carregamento dos elementos assim que o código é executado.

Funções úteis:

`Iterable<T>.asSequence(): Sequence<T>` -> converte um `Iterable` em `Sequence`;

`sequence { SequenceScope -> ... }` -> cria uma `Sequence` a partir de um bloco de código.

## Generators:

* Rotinas que retornam sequences;
* A instrução `yield` é semelhante a um `return`, só que retorna um elemento da sequência, criando um **ponto de suspensão**. 