# Loops

Loops can be done in alot of ways in Kotlin, the main ones are:
- while
- do while
- repeat
- for

## While

Executes block while the expression is true.
*In case the expression is always false, it does not even enter the loop.*

```kt
var counter = 0
while (counter != 5) {
    println(counter)
    counter++
}
```

Output:
```
0
1
2
3
4
```

## do ... while

Works the same as `while`, but always executes **at least** 1 iteration before checking the expression

```kt
do {
    println("hi")
} while (false) 
```

Output:
```
hi
```

## repeat

`repeat` just... repeats the times you tell him to.

```kt
repeat(5) {
    print("hi ")
}
```
Output:
```
hi hi hi hi hi 
```

## for

To use for loops, you mostly use "ranges".

```kt
for (i in 0..5) {
    println(i)
}
```

Output:
```
0
1
2
3
4
5
```

You can use `until` or `..<` to exclude last iteration.

```kt
println("until")
for (i in 0 until 5) {
    println(i)
}

println("..<")
for (i in 0 ..< 5) {
    println(i)
}
```

Output:
```
until
0
1
2
3
4
..<
0
1
2
3
4
```

## Iterating over collections

In case you have an array/list and want to iterate over it, you can do it with `forEach`:

```kt
val list = listOf("apple", "banana", "peach")
list.forEach { it ->
    println(it)
}
```

or even with `for`:

```kt
val list = listOf("apple", "banana", "peach")
for (fruit in list)
    println(fruit)
}
```

Output:
```
apple
banana
peach
```