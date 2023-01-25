# Introduction

> Android is a **mobile operating system** developed by Google. It is based on a modified version of the Linux kernel and other open source software, and is designed primarily for touchscreen mobile devices such as smartphones and tablets. In addition, Google has further developed Android TV for televisions, Android Auto for cars, and Wear OS for wrist watches, each with a specialized user interface. Variants of Android are also used on notebooks, game consoles, digital cameras, and other electronics.

## [Android SDK](https://developer.android.com/studio/releases/platforms)

* The **Android SDK** provides the tools and APIs necessary to begin developing apps on all types of Android devices;
* There are multiple **API levels** that represent different versions of the Android platform - the **API level** is the **version number** of the Android platform;
* The current **API level** is **33**, which is **Android 13**, with the codename **Tiramisu**;
* As newer the **API level** is, more features are available, but the **API level** is also **backwards compatible**, so you cannot use features from newer **API levels** in your app unless you **specify the minimum API level** your app requires, and your app will not run on devices with an older **API level**;

---

> **Note** - **Library vs. Framework**
>
> The goal of libraries and frameworks is the same: to expand the range of functionality available to developers. The difference is that a library is a set of functions that can be called by an application, while a framework is a set of functions that can be overridden by an application. A framework is a library that is designed to be extended by the developer.

---

## [Android Studio](https://developer.android.com/studio)

* Android Studio is the **official IDE** for Android app development, based on IntelliJ IDEA;
* Flexible **Gradle-based** build system;
* Fast and feature-rich **emulator**;
* Powerful **profiler**;
* Android Studio is **free** and **open source**.

### Project Structure

> Each project in Android Studio contains one or more modules with source code files and resource files. The types of modules include:
>
> * Android app modules;
> * Library modules;
> * Google App Engine modules.

Each module contains a **build.gradle** file that defines the module's build configuration. The build configuration is used by the **Gradle build system** to build the module.

Each app module contains the following folders:

* `manifests` - Contains the **AndroidManifest.xml** file, which defines the **application's components**;
* `java` - Contains the **Java and Kotlin source files**;
* `res` - Contains all the non-code resources, such as **layout files, strings, images, and more**;

---

## [Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro)

> _Every app project must have an AndroidManifest.xml file (with precisely that name) at the root of the project source set. The manifest file describes essential information about your app to the Android build tools, the Android operating system, and Google Play._

The manifest file declares the following:

* The **components of the app**, which include all activities, services, broadcast receivers, and content providers.
* The **permissions** that the app needs in order to access protected parts of the system and other apps.
* The **hardware and software features that the app requires**, which affects the app's installation on a device.


**Included in the APK generated in the build process.**

### App Components

> For each app component that you create in your app, you must declare a corresponding XML element in the manifest file:
> 
> * `<activity>` for each subclass of Activity;
> * `<service>` for each subclass of Service;
> * `<receiver>` for each subclass of BroadcastReceiver;
> * `<provider>` for each subclass of ContentProvider.

_If you subclass any of these components without declaring it in the manifest file, the system cannot start it._

### Permissions

> _Android apps must request permission to access sensitive user data (such as contacts and SMS) or certain system features (such as the camera and internet access). Each permission is identified by a unique label._

---

## [Application Resources](https://developer.android.com/guide/topics/resources/providing-resources)

> _Resources are the additional files and static content that your code uses, such as bitmaps, layout definitions, user interface strings, animation instructions, and more._

* _You should also provide alternative resources for specific device configurations, by grouping them in specially-named resource directories. At runtime, Android uses the appropriate resource based on the current configuration. For example, you might want to provide a different UI layout depending on the screen size or different strings depending on the language setting._
* Once you externalize your app resources, you can access them using resource IDs that are generated in your project's **`R` class**.
