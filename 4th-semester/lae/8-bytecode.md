# [JVM Bytecode](https://en.wikipedia.org/wiki/Java_bytecode)

> Bytecode is computer object code that an interpreter converts into binary machine code so it can be read by a computer's hardware processor. The interpreter is typically implemented as a virtual machine (VM) that translates the bytecode for the target platform.

The full list of bytecode instructions is available at [Wikipedia](https://en.wikipedia.org/wiki/List_of_Java_bytecode_instructions).

Bytecode instructions prefixes/suffixes table:

| **Prefix/Suffix** | **Type**          |
| ----------------- | ----------------- |
| i                 | integer           |
| l                 | long              |
| f                 | float             |
| d                 | double            |
| s                 | short             |
| b                 | byte              |
| c                 | char              |
| a                 | address/reference |

Example: `iadd` is an integer addition instruction, while `ladd` is a long addition instruction.

The `store` and `load` instructions are used to store and load values from variables, respectively. They also have a suffix of type `_n`, where `n` is a number from 0 to 3, which represents the identifier of the variable.

_The n for the **load** and **store** instructions specifies the **index in the local variable array to load from or store to**. The `aload_0` instruction **pushes the object in local variable 0 onto the stack** (this is usually the `this` object). `istore_1` **stores the integer on the top of the stack into local variable 1**. For local variables beyond 3 the suffix is dropped and operands must be used._

The `const` instruction is used to **store a constant value on the stack**, and has a suffix of type `_n`, where `n` is a number with the value of the variable.

## Relevant Instructions

* `store`: pop a value from the stack and store it in a local variable;
* `load`: load a local variable and push it onto the stack;
* `const`: push a constant value onto the stack;
* `return`: return the top value on the stack;
* `checkcast`: check if the top value on the stack is of the given type;
* `dup`: duplicate the top value on the stack;
* `new`: allocates storage on Heap, initializes space and the object's header, and returns the reference to newbie object;

#### Arithmetic Operations

* `add`: add the top two values on the stack, and push the result;
* `sub`: subtract the top two values on the stack, and push the result;
* `mul`: multiply the top two values on the stack, and push the result;
* `div`: divide the top two values on the stack, and push the result;
* `rem`: remainder of the top two values on the stack, and push the result;
* `neg`: negate the top value on the stack, and push the result;

#### Bitwise Operations

* `shr`: shift the top value on the stack right by the number of bits specified by the next value on the stack, and push the result;
* `shl`: shift the top value on the stack left by the number of bits specified by the next value on the stack, and push the result;
* `xor`: exclusive or the top two values on the stack, and push the result;
* `and`: bitwise and the top two values on the stack, and push the result;
* `or`: bitwise or the top two values on the stack, and push the result;


#### Method Invocation

* `invokedynamic`: invoke a dynamic method;
* `invokeinterface`: invoke an interface method;
* `invokespecial`: invoke a special method;
* `invokestatic`: invoke a static method;
* `invokevirtual`: invoke a virtual method.

The **call to the base constructor** is made with the `invokespecial` instruction with the class name and the constructor name (`<init>`).