# Introduction to Prolog

> Prolog (**Pro**gramming in **log**ic) is a **logic programming language** associated with artificial intelligence and computational linguistics (other languages in this family include Lisp, Scheme, and Haskell). 

Prolog is a **declarative language**. In declarative languages, the logic is expressed in terms of **facts and rules**:

* The **facts** are the **statements that are true**;
* The **rules** are the **statements that are true under certain conditions** - used to **infer new facts from existing facts**.

> Facts and rules are called **clauses**, and are used to **define predicates**.
>
> A program is a **set of clauses**.

---
---

## Prolog Syntax

### Facts

Facts are **statements that are true**. They are written in the form of **predicate**:

```prolog
predicate(argument1, argument2, ..., argumentN).
```

For example, the following are facts:

```prolog
% This is a comment
% Predicate bigger/2 (2 parameters)
bigger(elephant, horse).
bigger(horse, donkey).
bigger(donkey, dog).
bigger(donkey, monkey).
```

After the fact is written, the **dot** is used to **end the statement**.

---

### Queries

Queries are used to **ask questions**:

```prolog
?- predicate(argument1, argument2, ..., argumentN).
```

For example, the following are queries:

```prolog
?- bigger(elephant, horse).
true
?- bigger(horse, elephant).
false
?- bigger(elephant, donkey).
false   
% Problem, because elephant is bigger than donkey
```

> **Transitive closure**: if A is bigger than B and B is bigger than C, then A is bigger than C.

---

### Rules

Rules define **new facts** based on **existing facts**:

```prolog
is_bigger(X, Y) :- bigger(X, Y).
is_bigger(X, Z) :- bigger(X, Y), is_bigger(Y, Z).
```

In the above example:
* `X`, `Y`, `Z` are **variables**;
* The comma (`,`) is a **logical AND**;
* `:-` is a **logical implication** - means `if`;
* **The order of the rules is important** - the first rule is checked first, then the second, etc.

---

### Terms

Prolog terms are either:

* **Numbers**;
* **Atoms** (constants) - start with a lowercase letter or are enclosed in single quotes (e.g. `elephant`, `'123'`);
* **Variables** - start with an uppercase letter or underscore (e.g. `X`, `Y`, `Z`, `_`);
* **Compound terms** - are formed by **unifying** two or more terms (e.g. `bigger(elephant, horse)`);
  * fuctor (e.g. `bigger`) + arguments (e.g. `elephant`, `horse`).

> **Atomic terms** are either atoms or numbers.
>
> **Ground terms** are terms that do not contain variables.

---

### Built-in Predicates

Prolog has a number of **built-in predicates**:

* `consult('file.pl').` - loads the file `file.pl` into the current session;
* `write('text'), nl.` - writes the text `text` and a new line (`nl`);

---

### Matching

Prolog uses **unification** to **match** terms:

* **Unification** is the process of **matching** two terms;
* **Unification** is **bidirectional** - if `X = Y`, then `Y = X`;

```prolog
?- born(mary, lisbon) = born(mary, X).
X = lisbon
Yes
```

---

### Algorithms

* Prolog uses **backtracking** to **find solutions to a query**;
* If a **goal matches a fact**, then it is satisfied;
* If a goal **matches a rule**, then it is **satisfied if the body of the rule is satisfied**;
* If a goal consists of **multiple subgoals**, then it is satisfied if **all subgoals are satisfied**;