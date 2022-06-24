# Metaprogramming

* Habilidade de ler, gerar, transformar ou modificar programas dinamicamente (em runtime);
* Tem como objetivo aumentar o desempenho, visto que a reflexão tem custos elevados.

---

## [JavaPoet](https://github.com/square/javapoet)

_`JavaPoet` is a Java API for generating `.java` source files._


<p align="center">
    <img src="./docs/javapoet.png" alt="JavaPoet" align="center"/>
</p>

### [JavaFile](https://square.github.io/javapoet/1.x/javapoet/com/squareup/javapoet/JavaFile.html)

_Represents a Java file containing a single top level class._

Example:

```
val file = JavaFile
    .builder("com.example", typeSpec)
    .build()
```

### [TypeSpec](https://square.github.io/javapoet/1.x/javapoet/com/squareup/javapoet/TypeSpec.html)

_Represents a generated class, interface, or enum declaration._

Example:

```
val typeSpec = TypeSpec
    .classBuilder("MyClass")
    .addField(fieldSpec)
    .addMethod(methodSpec)
    .build()
```

### [FieldSpec](https://square.github.io/javapoet/1.x/javapoet/com/squareup/javapoet/FieldSpec.html)

_Represents a generated field declaration._

Example:

```
val fieldSpec = FieldSpec
    .builder(String::class.java)
    .addModifiers(Modifier.PRIVATE)
    .build()
```

### [MethodSpec](https://square.github.io/javapoet/1.x/javapoet/com/squareup/javapoet/MethodSpec.html)

_Represents a generated constructor or method declaration._

Example:

```
val methodSpec = MethodSpec
    .methodBuilder("myMethod")
    .addModifiers(Modifier.PUBLIC)
    .addParameter(parameterSpec)
    .returns(String::class.java)
    .addStatement("return \"Hello, World!\"")
    .build()
```

Para definir um constructor, utiliza-se o método `constructorBuilder`, em vez de `methodBuilder`.

#### [ParameterSpec](https://square.github.io/javapoet/1.x/javapoet/com/squareup/javapoet/ParameterSpec.html)

_Represents a generated parameter declaration._

Não é muito utilizado, sendo que os parâmetros são definidos diretamente no método `addParameter`.
