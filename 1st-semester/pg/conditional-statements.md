# Conditional statements

You can control your code using conditional statements:

- `if`
- `else`
- `else if`
- `when`

The if statement evaluates the test expression inside the parenthesis ().

- If the test expression is evaluated to true, statements inside the body are executed.
- If the test expression is evaluated to false, statements inside the body are not executed.

You can read it almost as an english phrase:

```kt
if (something_is_true) {
    // execute this
} else {
    // if something is not true, execute else 
}
```

Example:

```kt
if (true) {
    println("im inside") // will run
}

if (false) {
    println("nope") // wont run
}
```

Example using `if`, `else if`, `else` and `when`.

```kt
val age = 18

if (age > 18) {
    println("adult")
} else if (age == 18) {
    println("well I guess you're an adult")
} else {
    println("not an adult")
}
```

This can be simplified to:
```kt
val age = 18

when {
    age > 18 -> println("adult")
    age == 18 -> println("well I guess you're an adult")
    else -> println("not an adult")
}
```