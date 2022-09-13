# [Spring Framework](https://spring.io/)

> *The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.*

## Spring Context

* **Contentor** de **inversão de controlo** e **injeção de dependências**;
* Sistema que permite fazer a **composição de objetos dinamicamente**;
* *The context is the Spring component responsible for instantiating and managing instances, such as controller instances.*

### Composição

* Criação do grafo da aplicação;
* Criar as instâncias dos objetos e passar as dependências umas às outras;

### Inversão de controlo (Inversion of Control - IoC)

* O dependente **recebe e usa a dependência**, mas **não a cria**:

<p align="center">
    <img src="./docs/dependencies.png" alt="Dependencies" align="center"/>
</p>

* **Constructor injection**: injeção de dependências através do construtor;
* **Wiring**: estabelecer a ligação/dependência entre os objetos;

### Utilização (exemplos)

1. Criação do contexto;
2. Adicionar as definições ao contexto;
3. Fazer refresh do contexto, para ter em consideração as novas definições;
4. Utilizar o contexto, para obter os **beans**.

#### Bean 

* Instância de uma classe gerida pelo Spring Context;
* *A bean is an object that is created and managed by the context.*

**Exemplo 1:**

Considerando, que existem as classes Component[A-C], e as seguintes dependências (**dependente -> dependência**):

ComponentC -> ComponentB ->  ComponentA

```kotlin
 // Create the context
val context = AnnotationConfigApplicationContext()

// Add the bean definitions
context.register(
    ComponentA::class.java,
    ComponentB::class.java,
    ComponentC::class.java
)

// Refresh the context
context.refresh()

// Get the beans (example: ComponentB)
val componentB = context.getBean<ComponentB>()
```

* Se não fosse passado o componente ComponentA, o Spring Context iria lançar uma exceção, pois não consegue resolver a dependência.
* Também seria lançado uma exceção, se não fosse passado o componente ComponentB, visto que não podemos pedir um componente que o Spring Context não consegue resolver.

**Exemplo 2:**

Também é possível adicionar as definições passando um package ao contexto, utilizando o método `scan`. Neste caso, o Spring Context irá procurar por classes anotadas com `@Component`

```kotlin
// Create the context
val context = AnnotationConfigApplicationContext()

// Add the bean definitions
context.scan("package.name")
```

---

### Nota

Também é possível usar o contexto com listas. Se um dos componentes depende de uma lista de outros componentes, o Spring Context irá resolver a dependência, criando uma lista com os componentes necessários, anotados com `@Component`.

Isto pode ser útil, por exemplo, na criação de um Router, que depende de uma lista de Handlers.

---

**Exemplo 3:**

Se um componente passado ao contexto não for inicializado por um construtor, mas sim um método estático por exemplo, é necessário adicionar a anotação `@Bean` ao método estático, ou a outro método criado por nós que retorne o componente.

No exemplo seguinte, um HttpClient é inicializado através de um método estático `newBuilder`, logo criamos a função que chama esse método e anotamos a mesma com `@Bean`.

```kotlin
class BeanConfig {
    @Bean
    fun httpClient(cookieHandler: CookieHandler): HttpClient = HttpClient
        .newBuilder()
        .cookieHandler(cookieHandler)
        .build()
}

// Create the context
val context = AnnotationConfigApplicationContext()

// Add the bean definitions
context.register(BeanConfig::class.java)
```