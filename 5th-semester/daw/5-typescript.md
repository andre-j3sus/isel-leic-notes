# [TypeScript](https://www.typescriptlang.org/)

> _TypeScript is a typed superset of JavaScript that compiles to plain JavaScript._

Using TypeScript:

```bash
npm install typescript ts-loader --save-dev  # install typescript
```

* `ts-loader` is a TypeScript loader for webpack;
* The TypeScript configuration file is `tsconfig.json`;
* The type information in the source files is checked and erased on the compiled files - type system is **not reified**;
* Types work as **sets** of values - a variable can only have one of the values in the set: `string | number` means that the variable can be a `string` or a `number`;
* Type system is **structural** - the type of a variable is determined by the structure of the value, and not by the name of the variable (nominal typing like in Java);

### The Basics

* The type of a variable is declared using the `:` operator: `let x: number = 1;`;
* Some types can be inferred by the compiler: `let x = 1;`;
* **Primitive types**:
  * `number` - floating point numbers;
  * `string` - strings;
  * `boolean` - boolean values;
  * `void` - no value;
  * `null` - null value;
    * Use `strictNullChecks` to avoid `null` values;
    * To make non-null assertion, use `!` operator: `x!.toString()`;
  * `undefined` - undefined value;
  * `any` - any value;
    * Use `noImplicitAny` to avoid inferring `any` type;
  * `never` - never value;
* **Arrays**:
  * `number[]` - array of numbers;
  * `Array<number>` - array of numbers;
* **Objects**:
  * Most common sort of type;
  * Defined using the `{}` operator, separating the properties with a `,` or a `;`: `{ x: number, y: number }`;
  * **Optional properties** are defined using the `?` operator: `{ x: number, y?: number }`;
* **Union types**:
  * Defined using the `|` operator: `number | string`;
  * **Type guards** are used to check the type of a variable: `if (typeof x === 'string') { ... }`;
* **Type Aliases**:
  * Give a name to a type;
  * Defined using the `type` operator: `type Point = { x: number, y: number };`;
* **Interfaces**:
  * Give a name to a type;
  * Defined using the `interface` operator: `interface Point { x: number, y: number };`;
  * **Optional properties** are defined using the `?` operator: `interface Point { x: number, y?: number };`;
  * **Readonly properties** are defined using the `readonly` operator: `interface Point { readonly x: number, readonly y: number };`;
  * **Function types** are defined using the `()` operator: `interface Point { (x: number, y: number): number };`;
  * **Indexable types** are defined using the `[]` operator: `interface Point { [key: string]: number };`;
  * **Extending interfaces** are defined using the `extends` operator: `interface Point extends Point2D { z: number };`;


> Differences between interfaces and type aliases:
> * Both can be **extended**, but with different syntax:
> * Its possible to **add new fields** to an interface, but not to a type alias;
> * Type aliases names may appear  in **error messages**, while interface names will always appear;
> * Interfaces cannot be used to rename primitive types, but type aliases can;

* **Type assertions** are used to **cast** a variable to a different type: `let x = <number> y;` or `let x = y as number;`;
* **Literal types** are used to define a variable with a **fixed value**:
  * `let x: 'foo' = 'foo';`;
  * `let x: 1 = 1;`;
  * More complex literals can be defined using the `|` operator: `let x: 'foo' | 'bar' = 'foo';`;
* **Enums** are used to define a variable with a **fixed set of values**:
  * `enum Color { Red, Green, Blue };`;
  * `let x: Color = Color.Red;`;

<!--Add more content (narrowing, functions, object types, generics, classes and modules) -->