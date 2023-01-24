# [Jetpack Compose](https://developer.android.com/jetpack/compose)

> *Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.*

* Declarative UI framework;

Notes about Composable functions:

* A **function that describes how to lay out and draw** one screen of your app;
* Annotated with the `@Composable` annotation;
* Only can be called from **another** composable function;
* Must be fast, idempotent (the function behaves the same way when called multiple times with the same argument), and free of side effects;
* Can execute in **any order**, and can be executed in **parallel**;
* Recomposition is optimistic and may be canceled.

In a [declarative UI model](https://developer.android.com/jetpack/compose/mental-model#paradigm), you describe the UI you want to build, and the framework takes care of the details of updating the UI when the underlying data changes:

* The data flows **down** the UI tree;
* The events flow **up** the UI tree;

---

## Elementary Composables

The following composables are the building blocks of a UI:

* `Text` - displays text;
* `Button` - displays a button;
* `Image` - displays an image;
* `TextField` - displays a text field.

---

## [Layouts](https://developer.android.com/jetpack/compose/layouts/basics)

* `Row` - displays a horizontal list of items;
* `Column` - displays a vertical list of items;
* `Box` - displays a box that can contain other composables;

---

## [State](https://developer.android.com/jetpack/compose/state)

* A composable function can have **state**;
* State in an app is any value that can change over time. 
* Any time a **state is updated**, the composable function that uses that state is **recomposed**;
* Composable functions can use the `remember` API to store an object in memory; _A value computed by remember is stored in the Composition during initial composition, and the stored value is returned during recomposition. remember can be used to store both mutable and immutable objects._
* `mutableStateOf` creates an observable `MutableState<T>`, which is an observable type integrated with the compose runtime;
* There are 3 ways to declare a `MutableState` object in a composable:

* `val state = remember { mutableStateOf(...) }`;
* `val value by remember { mutableStateOf(...) }`;
* `val (value, setValue) = remember { mutableStateOf(...) }`.

### [State Hoisting](https://developer.android.com/jetpack/compose/state#state-hoisting)

> _A stateless composable is a composable that doesn't hold any state. An easy way to achieve stateless is by using state hoisting._

* _State hoisting in Compose is a pattern of moving state to a composable's caller to make a composable stateless._
* The general pattern for state hoisting in Jetpack Compose is to replace the state variable with two parameters:
  * `value: T`: the current value to display;
  * `onValueChange: (T) -> Unit`: an event that requests the value to change, where T is the proposed new value.

This is an example of the declarative UI model in action: **the data/state flows down the UI tree, and the events flow up the UI tree.**

### Restoring State

* [`rememberSaveable`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/package-summary#rememberSaveable(kotlin.Array,androidx.compose.runtime.saveable.Saver,kotlin.String,kotlin.Function0)) - stores the state of a composable in a `SavedStateHandle` object;
  * It behaves similarly to `remember`, but the stored value **will survive the activity or process recreation** using the saved instance state mechanism.

```kotlin
val holder = rememberSaveable(stateSaver = HolderSaver) { mutableStateOf(Holder(0)) }
```

_A [Saver](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/Saver) describes how the object of `Original` class can be simplified and converted into something which is `Saveable`._

All data types that are added to the `Bundle` are saved automatically. If you want to save something that cannot be added to the Bundle, there are several options:

* **Parcelize** - The simplest solution is to add the `@Parcelize` annotation to the object. The object becomes **parcelable**, and can be bundled.
* MapSaver - If you want to save a custom object, you can use the `MapSaver` class. It converts the object into a `Map<String, Any?>` and saves it in the bundle.
* ListSaver

---

## [Material Components and layouts](https://developer.android.com/jetpack/compose/layouts/material)

> Jetpack Compose offers an implementation of [Material Design](https://material.io/design/introduction), a comprehensive design system for creating digital interfaces. Material Components (buttons, cards, switches, etc.) and layouts like `Scaffold` are available as composable functions.