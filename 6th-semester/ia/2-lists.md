# Lists

> List is a simple data structure widely used in non-numeric programming. It is a collection of items in a particular order. The items in a list are called elements or sometimes items.

In Prolog, a list can be represented as:

```prolog
[a, b, c]
```

All structures in Prolog are **trees**, and so is a list. A list can be either **empty** (`[]`) or **non-empty**.

A non-empty list is a structure with a **head** and a **tail**. The head is the first element of the list, and the tail is the rest of the list. The tail is either empty or another list:

```prolog
[Head | Tail]
```

or, in older versions of Prolog:

```prolog
.(Head, Tail)
```

---

## Membership

To check if an element is a member of a list, we can use the built-in predicate `member/2`:

```prolog
?- member(a, [a, b, c]).
true.
```

X is a member of a list if:

* X is the head of the list;
* X is a member of the tail of the list:

```prolog
member(X, [X | _]).
member(X, [_ | Tail]) :- member(X, Tail).
```
