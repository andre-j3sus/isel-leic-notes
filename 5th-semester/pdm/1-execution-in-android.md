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
      * This callback must be **implemented** to perform **initial setup**;
      * Your app should **initialize** essential components here;
      * Called on a `startActivity()` call;
    * `onStart()` - called after the onCreate() method, when the activity becomes **visible to the user**;
    * `onResume()` - called when the activity will **start interacting** with the user;
    * `onPause()` - when called, the activity is **still visible to the user**, but **not in focus** - _it technically means your activity is still partially visible, but most often is an indication that the user is leaving the activity, and the activity will soon enter the Stopped or Resumed state_
      * An example of activities in this state, are a map screen or a music player, where the user can still see the activity, but is not interacting with it;
    * `onStop()` - called when the activity is **no longer visible to the user**;
      * Called when the user **selects other user task**;
    * `onDestroy()` - called before the activity is destroyed;
      * Called when the **back button is pressed** (This behavior is different for root launcher activities when your app is running on a device that runs Android 12 or higher).
    * `onRestart()` - restores the state of the activity from the point where it was **last stopped**;

---

## [Threading Model](https://developer.android.com/guide/components/processes-and-threads)

> _When an application is launched, the system creates a thread of execution for the application, called "main." This thread is very important because it is in charge of dispatching events to the appropriate user interface widgets, including drawing events. It is also almost always the thread in which your application interacts with components from the Android UI toolkit._

This thread is called the **main thread**, or the **UI thread**.

* All components that run in the same process are instantiated in the UI thread, and system calls to each component are dispatched from that thread.
* There are two rules to Android's single-thread model:
  * **Do not block the UI thread;**
  * **Do not access the Android UI toolkit from a thread other than the UI thread.**

### Worker Threads

> _If you have operations to perform that are not instantaneous, you should make sure to do them in separate threads ("background" or "worker" threads)._

* Note that **you cannot update the UI from any thread other than the UI thread** or the "main" thread.
* Methods that can help to access the UI thread from another threads:
  * `Activity.runOnUiThread(Runnable)`
  * `View.post(Runnable)`
  * `View.postDelayed(Runnable, long)`

---

## [Intents](https://developer.android.com/guide/components/intents-filters)

> _App activities, services, and broadcast receivers are activated by intents. An intent is a message defined by an Intent object that describes an action to perform, including the data to be acted upon, the category of component that should perform the action, and other instructions._

* An Intent is a **messaging object** you can use to **request an action** from another [app component](https://developer.android.com/guide/components/fundamentals#Components);
  * An app component can be an **activity**, a **service**, a **broadcast receiver**, or a **content provider**;
* There are three fundamental use-cases for intents:
  * **Starting an activity**:
    * You can start an activity by calling `startActivity()` and passing an `Intent`, which describes the activity to start;
    * To [send data to the activity](https://developer.android.com/guide/components/activities/parcelables-and-bundles#sdba), you can add **extras** to the `Intent` object, using the `putExtra()` method;
  * **Starting a service**;
  * **Delivering a broadcast**.

### Intent types

There are two types of intents:

* **Explicit intents** specify which application will satisfy the intent, by supplying either the target app's package name or a fully-qualified component class name.
  * `new Intent(this, MyActivity.class)`;
* **Implicit intents** do not specify the app component to start, but rather declare a general action to perform, which allows a component from another app to handle the intent.
  * `new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.example.com"))`.
  * **Requires at least one intent filter in the manifest file.** - If multiple intent filters are compatible, the system displays a dialog so the user can pick which app to use.

### [Intent Filters](https://developer.android.com/guide/components/intents-filters)

An intent filter is a declaration in the manifest file (`<intent-filter>`) that associates an app component with an intent. The intent filter specifies the type of intent that the component can respond to, and the component that can handle the intent.

They have the following attributes:

* `android:action` - The action that the component handles. For example, `android.intent.action.MAIN` is the action that launches the main activity of an app.
* `android:category` - The category that the component belongs to. For example, `android.intent.category.LAUNCHER` is the category that identifies the main activity of an app.
* `android:data` - The data that the component handles. For example, `content://com.example.app.provider/words` is the data that identifies a content provider.

An intent can be explicit or implicit:

* An **explicit intent** specifies the component to start, such as `new Intent(this, MyActivity.class)`;
* An **implicit intent** specifies the action to perform, but not the component to start, such as `new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.google.com"))` - the system finds an activity that can handle the intent.
  * **Requires at least one intent filter in the manifest file.**

---

## [Tasks and the back stack](https://developer.android.com/guide/components/activities/tasks-and-back-stack)

> _A **task** is a **collection of activities** that users interact with when trying to do something in your app. These activities are arranged in a stack — the **back stack** — in the order in which each activity is opened._

* A new activity is **pushed** onto the back stack when it is started;
* When the user presses the **back button**, the current activity is **popped** off the stack and destroyed;
  * Android 11 and lower: the system **finishes the activity** and removes it from the stack;
  * Android 12 and higher: the system **moves** the activity and its task to the background instead of finishing the activity.

> **Note**: _Because the **activities in the back stack are never rearranged**, if your app allows users to start a particular activity from more than one activity, a new instance of that activity is created and pushed onto the stack (rather than bringing any previous instance of the activity to the top)._

### Background and Foreground tasks

> _A task is a cohesive unit that can move to the background when a user begins a new task or goes to the Home screen._

* A **foreground task** is the task that the user is currently interacting with;
* A **background task** is a task that is not currently visible to the user - it is **stopped, but not destroyed**;

---

## [Background Work](https://developer.android.com/guide/background)

> _Processing data in the background is an important part of creating an Android application that is both responsive for your users as well as a good citizen on the Android platform. Doing work on the main thread can lead to poor performance and therefore a poor user experience._

**Background work** is work that runs outside of the main thread: common long-running tasks include things like decoding a bitmap, accessing storage, working on a machine learning (ML) model, or performing network requests.

Types of background work:

* **Immediate** - needs to be done **immediately**;
* **Long Running** - needs to be done **over a period of time**;
* **Deferred** - needs to be done **at some point in the future**.

Background work can be either persistent or impersistent :

* **Persistent** - remains scheduled through app restarts and device reboots;
  * _You should use `WorkManager` for all forms of persistent work._
* **Impersistent** - is canceled when the app is stopped or the device is rebooted.
  * _You should use Kotlin coroutines for immediate impersistent work._ - **asynchronous work**;
  * _You shouldn't use long-running and deferrable impersistent work._
  
### [WorkManager](https://developer.android.com/topic/libraries/architecture/workmanager)

> _WorkManager is the recommended library for persistent work. Scheduled work is guaranteed to execute sometime after its Constraints are met. WorkManager allows observation of work status and the ability to create complex chains of work._

_All work must be done in a `ListenableWorker` class. A simple implementation, `Worker`, is recommended as the starting point for most developers. With the optional dependencies, you can also use `CoroutineWorker` or RxWorker. All background work is given a **maximum of ten minutes to finish** its execution. After this time has expired, the worker will be signalled to stop._

There are two types of work:

* `OneTimeWorkRequest` - **one-time** work;
* `PeriodicWorkRequest` - **recurring** work.

The [`CoroutineWorker`](https://developer.android.com/guide/background/persistent/threading/coroutineworker) class is a `Worker` that runs on a **background thread** using **Kotlin coroutines**, which has a suspending version of `doWork()`.

---

## [Kotlin Flows](https://developer.android.com/kotlin/flow)

> _In coroutines, **a flow is a type that can emit multiple values sequentially**, as opposed to suspend functions that return only a single value. For example, you can use a flow to receive live updates from a database._

### [StateFlow and SharedFlow](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow)

> *`StateFlow` and `SharedFlow` are two new types of flow that are designed to make it easier to work with state in your app.*

* The `StateFlow` class is a **state-holder** flow that emits the **current and new state updates** to its collectors. The current state value can also be read through its value property. To update state and send it to the flow, assign a new value to the value property of the `MutableStateFlow` class.
* The `SharedFlow` class is a **hot** flow that **shares** emitted values among all its collectors; it's a highly-configurable generalization of the `StateFlow`.

The [`collectAsState()`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#(kotlinx.coroutines.flow.StateFlow).collectAsState(kotlin.coroutines.CoroutineContext)) extension function is used to **collect** the **latest** value of a flow as a `StateFlow` instance.

---

## [Lifecycle and lifecycle owners](https://developer.android.com/topic/libraries/architecture/lifecycle)

> _Lifecycle-aware components perform actions in response to a change in the lifecycle status of another component, such as activities and fragments. These components help you produce better-organized, and often lighter-weight code, that is easier to maintain._

_`[Lifecycle`](https://developer.android.com/topic/libraries/architecture/lifecycle#lc) is a class that holds the information about the lifecycle state of a component (like an activity or a fragment) and allows other objects to observe this state._

A Lifecycle uses two main enumerations:

* `State` - the current state of the lifecycle;
* `Event` - the events that cause the lifecycle to change state.

_`LifecycleOwner` is a single method interface that denotes that the class has a Lifecycle. It has one method, `getLifecycle()`, which must be implemented by the class._

A `LifecycleScope` is defined for each `Lifecycle` object. Any coroutine launched in this scope is canceled when the `Lifecycle` is destroyed. You can access the `CoroutineScope` of the `Lifecycle` either via `lifecycle.coroutineScope` or `lifecycleOwner.lifecycleScope` properties.

---

## [Automated Testing in Android](https://developer.android.com/training/testing)

* **Local tests** are **faster** and **more reliable** than instrumented tests;
* [**Instrumented tests**](https://developer.android.com/training/testing/instrumented-tests) are **more realistic** and **more comprehensive** than local tests.