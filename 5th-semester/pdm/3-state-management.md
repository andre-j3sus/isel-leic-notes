# State Management

## [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)

> _The `ViewModel` class is a business logic or screen level state holder._

* Class designed to store and **manage UI-related data** in a lifecycle conscious way;
* Allows data to **survive configuration changes** such as screen rotations;
* **Alternative execution host**;
* To **implement** a ViewModel, create a class that extends [`ViewModel`](https://developer.android.com/reference/androidx/lifecycle/ViewModel) and add an instance of it in the activity.

The **key benefits** of the ViewModel class are essentially two fold:

* It allows you to **persist UI state**;
* It provides **access to business logic**.

### [SavedStateHandle](https://developer.android.com/topic/libraries/architecture/viewmodel/viewmodel-savedstate)

> `SaveStateHandle` allows you to persist data not just through configuration changes, but across process recreation. That is, **it enables you to keep the UI state intact even when the user closes the app and opens it at a later time**.

_ViewModel objects receive a SavedStateHandle object through its constructor. This object is a key-value map that lets you write and retrieve objects to and from the saved state. These values persist after the process is killed by the system and remain available through the same object._

* Saved state is **tied to your task stack** - If your task stack goes away, your saved state also goes away.
  * This can occur when force stopping an app, removing the app from the recents menu, or rebooting the device. 

### [ViewModel Lifecycle](https://developer.android.com/topic/libraries/architecture/viewmodel#lifecycle)

> The lifecycle of a ViewModel is tied directly to its scope. A ViewModel remains in memory until the ViewModelStoreOwner to which it is scoped disappears. This may occur in the following contexts:
> 
> * In the case of an **activity, when it finishes**.
> * In the case of a fragment, when it detaches.
> * In the case of a **Navigation entry, when it's removed from the back stack**.

<p align="center">
    <img src="https://developer.android.com/static/images/topic/libraries/architecture/viewmodel-lifecycle.png" alt="ViewModel Lifecycle" align="center"/>
</p> 

> **Note**: You should not use callbacks to update the UI in a ViewModel, because the ViewModel has no knowledge of the lifecycle state of the UI, and therefore cannot guarantee that the UI is in a state that can handle UI updates. The Activity has a lifecycle, and the ViewModel has a lifecycle, but the two lifecycles are not necessarily in sync.

---

## [Android Application Class](https://developer.android.com/reference/android/app/Application)

* The Application class is the **base class** for maintaining **global application state**;
* It provides **application-level** resources such as the `Context` object;
* Described in the **manifest file**, as the `android:name` attribute of the `<application>` element.

This class can be used to implement [**manual dependency injection**](https://developer.android.com/training/dependency-injection/manual#basics-manual-di), or to provide a context to other parts of the application.

The following graph shows the model of an Android application:

<p align="center">
    <img src="https://developer.android.com/static/topic/libraries/architecture/images/final-architecture.png" alt="Android app's application graph" align="center"/>
</p> 

---

## Repository

> _The Repository is a class that abstracts access to multiple data sources. The Repository is not part of the Architecture Components libraries, but is a suggested best practice for code separation and architecture._

> **Retrofit** is a REST Client for Java and Android. It makes it relatively easy to retrieve and upload JSON (or other structured data) via a REST based web service. It also makes it relatively easy to upload files to a server.

> **Room** is a persistence library that provides an abstraction layer over SQLite to allow for more robust database access while harnessing the full power of SQLite.

Room has three major components:

* The **database class** that holds the database and serves as the main access point for the underlying connection to your app's persisted, relational data.
* **Data entities** that represent tables in your app's database.
* **Data Access Objects** (DAOs) that provide methods that your app can use to query, update, insert, and delete data in the database.

<p align="center">
    <img src="https://developer.android.com/static/images/training/data-storage/room_architecture.png" alt="Diagram of Room library architecture" align="center"/>
</p> 

---

## [Sending data between activities](https://developer.android.com/guide/components/activities/parcelables-and-bundles#sdba)

> _When an app creates an `Intent` object to use in `startActivity(android.content.Intent)` in starting a new Activity, the app can pass in parameters using the `putExtra(java.lang.String, java.lang.String)` method. The OS **parcels** the underlying `Bundle` of the intent. Then, the OS creates the new activity, **un-parcels the data**, and passes the intent to the new activity._

### [Parcelable](https://developer.android.com/reference/android/os/Parcelable)

* Interface for classes whose instances can be **written to and restored** from a [`Parcel`](https://developer.android.com/reference/android/os/Parcel);
* A `Parcel` is a **container** for a **message** (data and object references) that can be **sent through an IBinder**;
* The [`@Parcelize`](https://developer.android.com/kotlin/parcelize) annotation is used to **automatically generate** the `Parcelable` implementation for a class, for the supported types:
  * Primitive types;
  * Objects and enums;
  * `String`, `CharSequence`, `IBinder`, `Exception`, ...
  * All `Serializable` and `Parcelable` types.
* If your type is not supported, you can **implement** a `Parceler` for it.

---

## [Shared Preferences](https://developer.android.com/training/data-storage/shared-preferences)

> _If you have a relatively small collection of key-values that you'd like to save, you should use the `SharedPreferences` APIs. A `SharedPreferences` object points to a file containing key-value pairs and provides simple methods to read and write them. Each `SharedPreferences` file is managed by the framework and can be private or shared._

You can create a new shared preference file or access an existing one by calling one of these methods:

* `getSharedPreferences(java.lang.String, int)` - Use this if you need multiple shared preference files identified by name, which you specify with the first parameter. You can call this from **any Context in your app**.
* `getPreferences(int)` - **Use this from an Activity** if you need to use only one shared preference file for the activity. Because this retrieves a default shared preference file that belongs to the activity, you don't need to supply a name.
