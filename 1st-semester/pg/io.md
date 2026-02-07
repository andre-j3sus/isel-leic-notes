# Input & Output

You can use `println()` and `print()` functions to send output to the standard output (screen):

```kt
fun main() {
    println("hello") // prints hello when you run the program
}
```

The difference between `println` and `print` is that `println` will insert a new line after.

```kt
fun main() {
    println("hello 1")
    println("hello 2")
    print("hi")
    print("hehe")
}
```

Output: 
```
hello 1
hello 2
hihehe
```

You can print variables by using `$`:
```kt
val name = "john"
println("My name is $name") // prints "My name is john"
```

In case you wanna print a result of a function, or access object's methods/members, you need to use braces.

You can print variables by using `$` and `println`:
```kt
fun myName(name: String) = "My name is $name"

println(" ${myName("john")} ") // prints "My name is john"
println(myName("john")) // prints "My name is john"
println(" $myName("john") ") // error
```

To read input, you use the `readln()` function:

```kt
fun main() {
    print("write something: ")

    val input = readln()
    println("text entered: $input")
}
```