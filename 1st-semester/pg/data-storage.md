# Data storage

Declaring variables in Kotlin:
```kt
val age = 18
val name = "roby"
val price = 33.5
```

What if you dont want to give it a initial value?
You can do that, but:
- you have to tell the compiler what type the variable will store
- you can not use the variable until you assign a value

```kt
val x: Int  // variable declaration that will store an Integer
println("hello")
x = 3       // ok
```

```kt
val x: Int  // variable declaration that will store an Integer
println(x)  // error, x was not defined yet
x = 3
```

When declaring a variable without writing its type, you need to give it a initial value, so the compiler can infer its type.

```kt
val z       // error, the compiler does not know what type z is

val x: Int  // variable declaration that will store an Integer
x = 3       // ok

val y: Int  // variable declaration that will store an Integer
y = "hi"    // error, "hi" is not an integer

val name = "john" // the compiler analyzes "john" and uses its type (String)
val name: String = "john" // same as above

var age: Int = "john" // error, age's type is Integer, can't store a String
```

In Kotlin there is also mutable and immutable variables:

- `var` - variable that you can change its values
- `val` - value that can not be reassigned after it's initializzed.

```kt
val x = 5   // x will store 5 (an Integer)
x = 10      // error, you can't reassign values

var name = "apple"   // name will store "apple" (a String)
name = "melon"  // ok, name will store "melon" now
```