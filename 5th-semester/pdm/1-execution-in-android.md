# [Execution in Android](https://developer.android.com/reference)

## [Activity](https://developer.android.com/guide/components/activities/intro-activities)

> *The Android system initiates code in an Activity instance by invoking specific callback methods that correspond to specific stages of its lifecycle.*

* **Execution host**;
* An Activity serves as the **entry point** for an app's interaction with the user;
* Provides the **window** in which the app draws its **UI**;
* Each activity is declared in the **manifest file**;
* In the mobile-app experience, the user journey often begins **non-deterministically**;

### [Activity Lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle)

* The **lifecycle of an activity** is defined by a series of **callback methods** that are invoked as the activity enters a new state:
    * `onCreate()` - when the system **creates** the activity;
    * `onStart()` - called after the onCreate() method, when the activity becomes **visible to the user**;
    * `onResume()`;
    * `onPause()`;
    * `onStop()` - called when the activity is **no longer visible to the user**;
    * `onDestroy()` - called before the activity is destroyed;
    * `onRestart()`.

---

## [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)


* Class designed to store and **manage UI-related data** in a lifecycle conscious way;
* Allows data to **survive configuration changes** such as screen rotations;
* **Alternative execution host**;
* To **implement** a ViewModel, create a class that extends [`ViewModel`](https://developer.android.com/reference/androidx/lifecycle/ViewModel) and add an instance of it in the activity.

---

## [Android Application Class](https://developer.android.com/reference/android/app/Application)

* The Application class is the **base class** for maintaining **global application state**;
* It provides **application-level** resources such as the `Context` object;
* Described in the **manifest file**, as the `android:name` attribute of the `<application>` element.

---

## [Automated Testing in Android](https://developer.android.com/training/testing)

* **Local tests** are **faster** and **more reliable** than instrumented tests;
* [**Instrumented tests**](https://developer.android.com/training/testing/instrumented-tests) are **more realistic** and **more comprehensive** than local tests.

---

## [Intents](https://developer.android.com/guide/components/intents-filters)

* An Intent is a **messaging object** you can use to **request an action** from another [app component](https://developer.android.com/guide/components/fundamentals#Components);
  * An app component can be an **activity**, a **service**, a **broadcast receiver**, or a **content provider**;
* There are three fundamental use-cases for intents:
  * **Starting an activity**:
    * You can start an activity by calling `startActivity()` and passing an `Intent`, which describes the activity to start;
    * To [send data to the activity](https://developer.android.com/guide/components/activities/parcelables-and-bundles#sdba), you can add **extras** to the `Intent` object, using the `putExtra()` method;
  * **Starting a service**;
  * **Delivering a broadcast**.

---

## [Parcelable](https://developer.android.com/reference/android/os/Parcelable)

* Interface for classes whose instances can be **written to and restored** from a [`Parcel`](https://developer.android.com/reference/android/os/Parcel);
* A `Parcel` is a **container** for a **message** (data and object references) that can be **sent through an IBinder**;
* The [`@Parcelize`](https://developer.android.com/kotlin/parcelize) annotation is used to **automatically generate** the `Parcelable` implementation for a class, for the supported types:
  * Primitive types;
  * Objects and enums;
  * `String`, `CharSequence`, `IBinder`, `Exception`, ...
  * All `Serializable` and `Parcelable` types.

---

## [StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)

> *`StateFlow` and `SharedFlow` are two new types of flow that are designed to make it easier to work with state in your app.*

* A **[flow](https://developer.android.com/kotlin/flow)** is a **stream** of **asynchronous** events that you can **observe**;
* Can be used to **represent** a **stream of events** that occur over time;
* The `StateFlow` class is a **state-holder** flow that emits the **current and new state updates** to its collectors;
* The `SharedFlow` class is a **hot** flow that **shares** emitted values among all its collectors; it's a highly-configurable generalization of the `StateFlow`.

The [`collectAsState()`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#(kotlinx.coroutines.flow.StateFlow).collectAsState(kotlin.coroutines.CoroutineContext)) extension function is used to **collect** the **latest** value of a flow as a `StateFlow` instance.