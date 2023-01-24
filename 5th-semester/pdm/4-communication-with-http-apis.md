# Communication with HTTP APIs

> The Android device as an **HTTP client**;

To perform network operations in your application, your manifest must include the following permissions:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

Both permissions are **normal permissions**, which means they're **granted at install time** and don't need to be requested at runtime.

> **Retrofit** is a REST Client for Java and Android. It makes it relatively easy to retrieve and upload JSON (or other structured data) via a REST based web service. It also makes it relatively easy to upload files to a server.

In this course, we used the [OkHttp](https://square.github.io/okhttp/) library to perform network operations.

To do serialization and deserialization of JSON, we used the [Gson](https://github.com/google/gson) library.

We used [ngrok](https://ngrok.com/) to expose our local server to the internet, so that we could test our application on a real device, using HTTPS.

[Siren](https://github.com/kevinswiber/siren) was used as media type for the API.

---

## [OkHttp](https://square.github.io/okhttp/)

> _HTTP is the way modern applications network. It’s how we exchange data & media. Doing HTTP efficiently makes your stuff load faster and saves bandwidth._

OkHttp works on Android 5.0+ (API level 21+) and Java 8+.

<!--Maybe add more about OkHttp-->

---

## [Coroutines on Android](https://developer.android.com/kotlin/coroutines)

> A coroutine is a concurrency design pattern that you can use on Android to simplify code that executes asynchronously.

To use coroutines in Android, the `ViewModel` class has a `viewModelScope` property that you can use to launch coroutines. This property is a predefined `CoroutineScope`.

With that scope, you can launch a coroutine that runs on the main thread, and you can use the `launch` function to launch a coroutine that runs on a background thread.
