# Other Storage Models

Este capítulo descreve outros modelos de armazenamento de dados, alternativos ao modelo relacional.

## Porquê outros modelos?

* O modelo relacional, por ser mais rico e complexo, dificulta a realização de sistemas escaláveis e com elevados níveis de disponibilidade;
* Em alguns domínios, o modelo relacional, com a sua estrutura tabular, não é o que melhor se adapta a esses domínios;
* A existência de um esquema rígido nas bases de dados relacionais retira-lhes alguma flexibilidade em domínios onde os dados são não estruturados ou são pouco semi-estruturados.

---

### Teorema CAP

* **Consistency**: Todos os nós veem a mesma imagem;
* **Availability**: Todos os nós que não estão em falha devem dar uma resposta razoável dentro de um tempo razoável;
* **Partition tolerance**: O sistema suporta falhas nas comunicações entre nós.

---

### Teorema BASE

* **Basically Available**: Em caso de falhas de comunicação, optar pela disponibilidade;
* **Soft state**: O estado do sistema pode alterar-se mesmo sem novos inputs (devido a replicação assíncrona);
* **Eventual consistency**: O Sistema evolui para um estado consistente se não se fornecerem novos inputs durante um tempo adequado.

---
---

## Modelos NoSQL

O termo **NoSql** foi generalizado para vários modelos de representação de
dados, muitas vezes, sem relação entre si. Para uns significará “No Sql”, para outros “Not only Sql”. A interpretação mais ajustada é considerar que o termo significa “não relacional”.

Diferentes modelos (orientados à agregação):

* Pares chave-valor (Hashing);
* Famílias de colunas;
* Modelos orientados a documentos;
* Modelos orientados a grafos.

<p align="center">
    <img src="./docs/types-of-nosql-datastores.png" width="60%" align="center"/>
</p>

Vantagens de modelos orientados à agregação:

* Em caso de necessidade de fracionamento dos dados para escalabilidade (sharding), cada agregado fica localizado no mesmo nó;
* Em acessos pela chave do agregado, evitem-se operações de JOIN morosas;
* Cada agregado funciona como a unidade atómica de alteração, remoção e inserção, não obrigando a transações nestas operações;
* Cada agregado funciona como a unidade de replicação, caso se deseje o
aumento da segurança contra perdas dos dados, escalabilidade para leitura e
disponibilidade.

---
---

## Modelo chave-valor

### Características

* Orientado ao agregado;
* Schemaless;
* Agregados opacos para o SGBD, ou seja, não são possíveis interrogações sobre parte do agregado;
* Interrogações pela chave;
* Em alguns sistemas, o valor pode ser uma estrutura de dados.

Contudo, não são apropriadas para casos onde se tenha relacionamentos ricos entre elementos diferentes dos dados, sejam requeridas transações ou se tenham de realizar interrogações por outros critérios que não a chave.

**Exemplo**: [Riak](https://riak.com/) - _Riak is a distributed NoSQL key-value data store that offers high availability, fault tolerance, operational simplicity, and scalability._

#### Elementos

* **Riak cluster**: análogo a um servidor de base de dados;
* **Bucket**: análogo a uma tabela;
* **Par chave-valor**: análogo a uma linha da tabela.

### Consistência

Eventual para operações individuais sobre uma chave.

---
---

## Famílias de colunas

### Características

* Podem ser vistas como uma evolução do modelo par (chave, valor) onde a componente valor ganha uma estruturação em colunas;
* Também podem ser vistas como uma estrutura bi-dimensional de pares (chave, valor), constituída por células identificadas pela chave comum e pelo nome da coluna;
* Usam armazenamento orientado às colunas (quando há poucas escritas e as leituras acedem a poucas colunas de muitas linhas, pode ser vantajoso).

Contudo, não são apropriadas para casos semelhantes ao modelo chave-valor.

**Exemplo**: [Cassandra](https://cassandra.apache.org/_/index.html) - _Cassandra is a free and open-source, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure._

### Elementos

* **Cluster**: análogo a um servidor de base de dados;
* **Keyspace**: análogo a uma base de dados;
* **Table**: análogo a uma tabela;
* **Row**: análogo a uma linha da tabela;
* **Column**: análogo a uma coluna da tabela;
* **Super column**: uma coluna que pode conter sub-colunas.

### Consistência

Eventual para operações individuais sobre uma chave, semelhante ao modelo chave-valor.

---
---

## Modelo document-oriented

### Características

* Orientadas ao agregado;
* Agregado visível para o SGBD;
* Schemaless;
* Interrogações baseadas no conteúdo do agregado;
* Indexações de partes do conteúdo do agregado.

**Exemplo**: [MongoDB](https://www.mongodb.com/) - _MongoDB is a source-available cross-platform document-oriented database program._

### Elementos

* **MongoDB instance**: análogo a um servidor de base de dados;
* **Database**: análogo a uma base de dados;
* **Collection**: análogo a uma tabela;
* **Document**: análogo a uma linha da tabela.

---
---

## Modelo graph-oriented

### Características

* Orientadas para representação e navegação em grafos;
* Otimizam interrogações que percorram as ligações entre nós;
* Sem esquema, mas com estrutura – os atributos de nós com o mesmo tipo não têm de ser os mesmos em todos os nós.

**Exemplo**: [Neo4j](https://neo4j.com/) - _Neo4j is a graph database management system._

### Elementos

* **DBMS**: servidor de base de dados;
* **Database**: base de dados;
* **Graph**: conjunto de nós ligados por arcos;
* **Label**: caracterização da classe de um nó.

### Consistência

* Todas as instruções isoladas são executadas numa transação;
* Podem ser iniciadas transações de forma explicita ou implícita;
* Não são garantidas leituras repetidas.
