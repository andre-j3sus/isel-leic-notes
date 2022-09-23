# [Jetpack Compose](https://developer.android.com/jetpack/compose)

> *Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.*

* A composable function is a **function that describes how to lay out and draw** one screen of your app;
* A composable function is any function annotated with the `@Composable` annotation;
* A composable function only can be called from **another** composable function;

## Elementary Composables

* `Text` - displays text;
* `Button` - displays a button;
* `Image` - displays an image;
* `TextField` - displays a text field;
* etc.

## [Layouts](https://developer.android.com/jetpack/compose/layouts/basics)

* `Row` - displays a horizontal list of items;
* `Column` - displays a vertical list of items;
* `Box` - displays a box that can contain other composables;

## State

* A composable function can have **state**;
* State in an app is any value that can change over time. 
* Any time a **state is updated**, the composable function that uses that state is **recomposed**;
* Composable functions can use the `remember` API to store an object in memory;
* `mutableStateOf` creates an observable `MutableState<T>`, which is an observable type integrated with the compose runtime;
* There are 3 ways to declare a `MutableState` object in a composable:

* `val state = remember { mutableStateOf(...) }`;
* `val value by remember { mutableStateOf(...) }`;
* `val (value, setValue) = remember { mutableStateOf(...) }`.