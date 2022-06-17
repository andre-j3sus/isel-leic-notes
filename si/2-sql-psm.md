# SQL/PSM (SQL/Persistent Stored Modules)

_SQL/PSM is an ISO standard mainly defining an extension of SQL with a procedural language for use in stored procedures._

Neste capítulo estão apresentadas as implementações de mecanismos de persistência de dados em [**PL/pgSQL (Procedural Language/PostgreSQL)**](https://www.postgresql.org/docs/current/plpgsql.html).

---
---

## Declaração de variáveis

São declaradas na zona de declarações de um bloco:

```
[ <<label>> ]
[ DECLARE
  declarations ]
BEGIN
  statements
END [ label ];
```

A sintaxe de declaração é:

`name [ CONSTANT ] type [ NOT NULL ] [ { DEFAULT | := | = } expression ]`

**Exemplo**:

```
DECLARE
    x INTEGER DEFAULT 30;
    url VARCHAR := 'http://mysite.com';
    user_id CONSTANT INTEGER := 10;
```

A afetação de variáveis pode ser feita de várias formas:

* `variable { := | = } expression`;
* Variantes das instruções:

```
SELECT expressions INTO variable FROM ...;
{ INSERT | UPDATE | DELETE } ... RETURNING expressions INTO variable;
```

---
---

## Instruções de controlo de fluxo

### Condicionais

_`IF` and `CASE` statements let you execute alternative commands based on certain conditions._

#### IF

```
IF boolean-expression THEN
  statements
[ ELSEIF boolean-expression THEN
  statements ]
[ ELSEIF boolean-expression THEN
  statements ]
...
[ ELSE
  statements ]
END IF;
```

#### CASE

```
CASE search-expression
    WHEN expression [, expression, ...] THEN
        statements
    [ WHEN expression [, expression [ ... ]] THEN
      statements
    ... ]
  [ ELSE
      statements ]
END CASE;
```

### Ciclos

_With the `LOOP`, `EXIT`, `CONTINUE`, `WHILE`, `FOR`, and `FOREACH` statements, you can arrange for your PL/pgSQL function to repeat a series of commands._

#### LOOP

_LOOP defines an unconditional loop that is repeated indefinitely until terminated by an `EXIT` or `RETURN` statement._

```
[ <<label>> ]
LOOP
    statements
END LOOP [ label ];
```

#### EXIT

_The loop is terminated and the statement following `END LOOP` is executed next._

`EXIT [ label ] [ WHEN boolean-expression ];`

#### CONTINUE

_The next iteration of the loop is begun._

`CONTINUE [ label ] [ WHEN boolean-expression ];`

#### WHILE

_The `WHILE` statement repeats a sequence of statements so long as the boolean-expression evaluates to true. _

```
[ <<label>> ]
WHILE boolean-expression LOOP
    statements
END LOOP [ label ];
```

#### FOR

_This form of `FOR` creates a loop that iterates over a range of integer values._

```
[ <<label>> ]
FOR name IN [ REVERSE ] expression .. expression [ BY expression ] LOOP
    statements
END LOOP [ label ];
```

_Using a different type of `FOR` loop, you can iterate through the results of a query and manipulate that data accordingly._

```
[ <<label>> ]
FOR target IN query LOOP
    statements
END LOOP [ label ];
```

---
---

## Cursores

_Rather than executing a whole query at once, it is possible to set up a cursor that encapsulates the query, and then read the query result a few rows at a time._

Declarar cursores:

`name [ [ NO ] SCROLL ] CURSOR [ ( arguments ) ] FOR query;`

---
---

## Exceções e Mensagens

When an error occurs in a block, PostgreSQL will abort the execution of the block and also the surrounding transaction.

To recover from the error, you can use the `EXCEPTION` clause in the `BEGIN`...`END` block.

```
[ <<label>> ]
DECLARE
BEGIN
    statements;
EXCEPTION
    WHEN condition [OR condition...] THEN
       handle_exception;
   [WHEN condition [OR condition...] THEN
       handle_exception;]
   [WHEN others THEN
       handle_other_exceptions;
   ]
END;
```

To obtain information about an error:

`GET STACKED DIAGNOSTICS variable { = | := } item [ , ... ];`

See all the error codes [here](https://www.postgresql.org/docs/current/errcodes-appendix.html).

---

Use the `RAISE` statement to report messages and raise errors.

```
RAISE [ level ] 'format' [, expression [, ... ]] [ USING option = expression [, ... ] ];
RAISE [ level ] condition_name [ USING option = expression [, ... ] ];
RAISE [ level ] SQLSTATE 'sqlstate' [ USING option = expression [, ... ] ];
RAISE [ level ] USING option = expression [, ... ];
RAISE ;
```

`level` can be one of the following:

* `DEBUG5`;
* `DEBUG4`;
* `DEBUG3`;
* `DEBUG2`;	
* `DEBUG1`;
* `LOG`;
* `NOTICE`;
* `WARNING`;
* `ERROR`.

Por omissão é `NOTICE`.


---
---

## Procedimentos armazenados

_ A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again._

Em geral, a sua utilização é restringida as aspetos relacionados com a natureza intrínseca dos dados, como por exemplo, validação de regras de
negócio associados a restrições de integridade dos dados, não suportadas
diretamente pelo SGBD. Logo, não devem ser usados para implementação de lógica aplicacional.

Vantagens:

* **Maior desempenho**: Dados processados no local onde estão armazenados permitem tirar partido das características do SGBD, contudo pode sobrecarregar o SGBD em exagero;
* **Bom encapsulamento**: A utilização de procedimentos evita que se acedam diretamente aos dados:
* **Maiores níveis de reutilização**: Procedimentos podem ser partilhados por várias aplicações;
* **Maior segurança**: Lógica ocultada para os clientes.

```
CREATE [ OR REPLACE ] PROCEDURE
    name ( [ [ argmode ] [ argname ] argtype [ { DEFAULT | = } default_expr ] [, ...] ] )
  { LANGUAGE lang_name
    | TRANSFORM { FOR TYPE type_name } [, ... ]
    | [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    | SET configuration_parameter { TO value | = value | FROM CURRENT }
    | AS 'definition'
    | AS 'obj_file', 'link_symbol'
    | sql_body
  } ...
```

Exemplo:

```
CREATE OR REPLACE PROCEDURE insert_data(a INTEGER, b INTEGER)
    LANGUAGE plpgsql
AS 
$$
BEGIN
    INSERT INTO table (a, b) VALUES (a, b);
END;
$$;
```

---
---

## Funções

_In Postgres, the main functional difference between a function and a stored procedure is that **a function returns a result, whereas a stored procedure does not**. This is because the intention behind a stored procedure is to perform some sort of activity and then finish, which would then return control to the caller._


```
CREATE [ OR REPLACE ] FUNCTION
    name ( [ [ argmode ] [ argname ] argtype [ { DEFAULT | = } default_expr ] [, ...] ] )
    [ RETURNS rettype
      | RETURNS TABLE ( column_name column_type [, ...] ) ]
  { LANGUAGE lang_name
    | TRANSFORM { FOR TYPE type_name } [, ... ]
    | WINDOW
    | { IMMUTABLE | STABLE | VOLATILE }
    | [ NOT ] LEAKPROOF
    | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
    | { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }
    | PARALLEL { UNSAFE | RESTRICTED | SAFE }
    | COST execution_cost
    | ROWS result_rows
    | SUPPORT support_function
    | SET configuration_parameter { TO value | = value | FROM CURRENT }
    | AS 'definition'
    | AS 'obj_file', 'link_symbol'
    | sql_body
  } ...
```

Exemplo:

```
CREATE OR REPLACE FUNCTION f1(i INTEGER) RETURNS INTEGER
    LANGUAGE plpgsql
AS
$$
DECLARE
    r INTEGER;
BEGIN
    r := i * 2;
    RETURN r;
END;
$$;
```

---
---

## Vistas

_**A view is a virtual table in Postgres**. It represents the result of a query to one or more underlying tables in Postgres. Views are used to simplify complex queries since these queries are defined once in the view, and can then be directly queried via the same._

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW name [ ( column_name [, ...] ) ]
    [ WITH ( view_option_name [= view_option_value] [, ... ] ) ]
    AS query
```

Uma vista pode ser alterável se cumprir os seguintes critérios:

* Tem apenas uma tabela base;
* Não contém cláusulas DISTINCT, GROUP BY ou HAVING;
* Não contém funções de agregação;
* Não contém os operadores UNION, INTERSECT ou EXCEPT.

_Simple views are automatically updatable: the system will allow INSERT, UPDATE and DELETE statements to be used on the view in the same way as on a regular table._

---
---

## Gatilhos

Também conhecidos por _event-condition-action rules_:

* Evento: INSERT, UPDATE, DELETE;
* Condição: em que condições a ação é executada;
* Ação: sequência de ações SQL.

```
REATE [ OR REPLACE ] [ CONSTRAINT ] TRIGGER name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
    ON table_name
    [ FROM referenced_table_name ]
    [ NOT DEFERRABLE | [ DEFERRABLE ] [ INITIALLY IMMEDIATE | INITIALLY DEFERRED ] ]
    [ REFERENCING { { OLD | NEW } TABLE [ AS ] transition_relation_name } [ ... ] ]
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( condition ) ]
    EXECUTE { FUNCTION | PROCEDURE } function_name ( arguments )

where event can be one of:

    INSERT
    UPDATE [ OF column_name [, ... ] ]
    DELETE
    TRUNCATE
```

Exemplo:

```
CREATE TRIGGER GatilhoNivelComando
AFTER INSERT on Alunos
REFERENCING NEW TABLE AS novos FOR EACH STATEMENT
BEGIN ATOMIC
    INSERT INTO Aprovados
    (SELECT numero FROM novos WHERE nota >= 10);
END;
```

_The following table summarizes which types of triggers may be used on tables, views, and foreign tables:_

<p align="center">
    <img src="./docs/triggers_matrix.png" alt="Trigger" width="60%" align="center">
</p>

_A statement trigger fires once per triggering event and regardless of whether any rows are modified by the insert, update, or delete event. A row trigger fires once for each row affected by the triggering event. If no rows are affected, the trigger does not fire._

Características das funções que implementam triggers:

* Não podem ter parâmetros;
* Devem ter o tipo de retorno `TRIGGER`;
* Para gatilhos de nível de comando, devem retornar NULL;
* Para gatilhos de linha, podem:
  * Retornar NULL para indicar que o processamento da linha corrente deve ser saltado;
  * Para INSERT e UPDATE, a linha retornada será a que vai ser inserida
ou substituir a corrente. Assim, para gatilhos BEFORE, se não se
pretender alterar os dados do registo a ser tratado, deve ser devolvido
`NEW` para INSERT e UPDATE e `OLD` para DELETE.

`NEW`: num gatilho de nível linha representa os dados da nova linha em INSERT, ou os novos dados da linha em UPDATE.

`OLD`: num gatilho de nível linha representa os dados da linha a ser apagada em DELETE, ou os dados anteriores da linha em UPDATE.