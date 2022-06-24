# Virtual Machines

* Ambiente de execução (managed runtime);
* System virtual machines: full virtualization;
* **Process virtual machines**: executa programas.

| Virtual Machine | IR           | Linguagem           |
| --------------- | ------------ | ------------------- |
| JVM             | **bytecode** | Java, Kotlin, Scala |
| .NET            | IL           | C#, F#, VB          |
| Node.js         | JavaScript   | JS, TS, Kotlin      |

**IR**: Intermediate Representation;

---

## Managed Runtime

* **Portabilidade**: compila uma vez e executa em qualquer plataforma;
* **Safety**: não existem acessos inválidos à memória;
* **Garbage collection**;
* **Jitter**: just in time compiler;
* **Classloader**: carregador de ficheiro lazy (apenas são carregados quando são necessários) e dinâmica (carregados em tempo de execução);
* **Interoperability** entre as linguagens da mesma VM (ex.: Java <=> Kotlin);
* **Sistema de tipos**.

`Software = bytecodes + metadata`

### Metadata

* Descreve o software;
* Dados com informação sobre outros dados;
* Equivalente ao header file.

Em Kotlin, cada class tem um ficheiro .class associado, contendo bytecode e metadata:

<p align="center">
    <img src="./docs/kt-compile.drawio.png" alt="Kotlin Compilation" align="center"/>
</p>

---

## Kotlin/Java Type System

* Um sistema de tipos é um conjunto de princípios e regras que especificam a definição e comportamento dos tipos;
* Tipos são definidos por classes ou interfaces;
* Classes têm membros e métodos:

| JVM     | Kotlin     |
| ------- | ---------- |
| Fields  | Properties |
| Methods | Functions  |

O conceito de propriedade não existe na JVM.

Uma propriedade em Kotlin pode gerar:

* **Field**: slot em memória onde o valor da propriedade é armazenado;
* **Getter**: método que retorna o valor da propriedade;
* **Setter**: método que define o valor da propriedade.

O tipo base da hierarquia de tipos Kotlin é `Any`, enquanto que em Java é `Object`.

---

## Componente

* Unidade de software reutilizável;
* Tem IR e metadata;
* Ready to use: não precisa de compilação estática;
* Indivisível;
* Fornecido pelo provider e utilizado pelo cliente;

O software desenvolvido por componentes promove a reutilização de código e reduz a complexidade do desenvolvimento.

---

## Notas

**Compilar**:

* Traduzir/converter de uma linguagem para outra;
  * **Dinâmica**: em tempo de execução;
  * **Estática**: em build time;

**Transpilação**: compilação de uma linguagem de alto nível para outra.

**Verbose**: algo exprimido por mais palavras que as necessárias (Java).

**Implícito**: algo que não está expresso formalmente (no source code) mas é gerado pelo compilador.

**Abstração**: separar o essencial do acessório, para focar a atenção em detalhes mais importantes.

**AVISO**: nunca dar mais permissões que as necessárias:
* Imutabilidade (val > var);
* Privacidade (private > protected > public).

---

## Unmanaged Runtime vs. Managed Runtime

<p align="center">
    <img src="./docs/managed-vs-unmanaged.png" alt="Unmanaged Runtime vs. Managed Runtime" align="center"/>
</p>

### Unmanaged Runtime

* Componente não é unidade, mas sim `header + object` files:
  * header <=> metadata;
  * object <=> IR;
* Ligação estática;
* Modificação estrutural: compilação + link;
* Modificação comportamental: link.

<p align="center">
    <img src="./docs/unmanaged.png" alt="Unmanaged Runtime" align="center"/>
</p>

Como a ligação é estática, os object files podem ser apagados e a.out executa na mesma.
  
### Managed Runtime

* Componente é unidade: .class file;
* Ligação dinâmica;
* Jitter;
* Lazy loading;

<p align="center">
    <img src="./docs/managed.png" alt="Managed Runtime" align="center"/>
</p>