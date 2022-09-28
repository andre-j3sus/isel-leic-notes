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
* Alternative execution host;
* To implement a ViewModel, create a class that extends [`ViewModel`](https://developer.android.com/reference/androidx/lifecycle/ViewModel) and add an instance of it in the activity;
* ...

---

## [Android Application Class](https://developer.android.com/reference/android/app/Application)

* The Application class is the **base class** for maintaining **global application state**;
* It provides **application-level** resources such as the `Context` object;
* ...

---

## [Automated Testing in Android](https://developer.android.com/training/testing)

* **Local tests** are **faster** and **more reliable** than instrumented tests;
* [**Instrumented tests**](https://developer.android.com/training/testing/instrumented-tests) are **more realistic** and **more comprehensive** than local tests;
* ...

---

## Navigation

...