# Functions

Kotlin has many functions that you can use, one example is `println`, which takes a `String` argument with text that you want to print.

```kt
println("test")
```

This is how you declare your own functions:

```kt
fun main() {
    println("hi")
}

fun add(a: Int, b: Int): Int {
    return a + b
}
```

The main function does not do much, just prints "hi".
Lets see the `add` function:

- function name: `add`
- parameters: `a` and `b` (both Integers)
- return type: `Int` 
    - this is the type of the "data" that the function will return, in this case we return `a+b`, when you add 2 `Int`'s, it produces another `Int`
- function body: `return a + b`

How to use the function?

```kt
fun add(a: Int, b: Int): Int {
    return a + b
}

fun main() {
    val x = 3
    val y = 5
    val result = add(x, y) 
    // result will store the return value of add (a+b = x+y = 3+5)
}
```

This calls the function and stores the result (`a+b`) in the value `result`.
With Kotlin you can cool stuff, like this:
```kt 
fun add(a: Int, b: Int): Int {
    return a + b
}

// is the same as 

fun add(a: Int, b: Int): Int = a + b // single return expression

// and the same as 

fun add(a: Int, b: Int) = a + b // compiler infers the type automatically
```

Another example:

```kt
// This returns true if the parameter age is >= 18
fun isAdult(age: Int): Boolean {
    if (age >= 18) return true
    else return false
}

// same as putting return out of if expressions

fun isAdult(age: Int): Boolean {
    return if (age >= 18) true
    else false
}

// same as 

fun isAdult(age: Int): Boolean = if (age >= 18) true else false

// same as 

fun isAdult(age: Int) = if (age >= 18) true else false
```

There is also "extension" functions, where you can write new functions for a class or an interface from a third-party library that you can't modify.

To declare an extension function, prefix its name with a receiver type, which refers to the type being extended. The following adds a `isAdult` function to `Int`:

```kt
fun Int.isAdult() = if (this >= 18) true else false

fun main() {
    val x = 23.isAdult() // x is "true"

    val age = 17
    println(age.isAdult()) // will print false
}
```