# Execution in Android

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