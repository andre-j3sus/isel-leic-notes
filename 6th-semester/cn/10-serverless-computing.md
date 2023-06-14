# Serverless Computing

## Review of Execution Environments

* **Virtual Machines**
  * Instances with different resources;
  * Execute any application or set of applications;
* **Containers**
  * Execution of images pre-configured;
  * Execute any application or set of applications;
* **Web Containers**
  * Execution of web applications
* **Functions**
  * Execution of functions triggered by events or HTTP requests;
  * Execute a single function for every request.

From the top to the bottom, the execution environments are **more specialized** and have **less control** over the execution environment.

---

## Event-Driven Serverless Computing

> Serverless computing is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity.

* Execution of code, in multiple languages, only when needed, with **autoscaling**;
* Server is only active when there is a request;
* **Cost only for the execution time** - in traditional cloud computing, the cost is for the whole time the instance is running;
* The code is **stateless** - the code does not have access to the state of the execution environment;
* **Its important to be stateless, because the number of instances and the instance lifetime is managed by the provider**.

### Examples of Serverless Computing Services

* [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [Google Cloud Functions](https://cloud.google.com/functions)
* [OpenWhisk Apache](https://openwhisk.apache.org/)

---

## Google Cloud Functions

* Name and region of the function;
* **Trigger**: event or HTTP request;
  * *HTTP trigger*: the function is triggered by an HTTP request;
  * *Cloud Pub/Sub trigger*: the function is triggered by a message in a Pub/Sub topic;
  * *Cloud Storage trigger*: the function is triggered by a file upload in a Cloud Storage bucket;
  * *Cloud Firestore trigger*: the function is triggered by a change in a Firestore document.
* If its HTTP trigger, the function can be called by a HTTP request, using a generated URL;
* The **authentication** can allow only authenticated users, or allow unauthenticated users;
* The **allocated memory** has implications in the execution time and cost;
* Maximum and minimum number of instances;
* Its possible to add a service account to the function, to allow access to other resources.

### Trigger HTTP

```java
public class Example implements HttpFunction {
    @Override
    public void service(HttpRequest request, HttpResponse response) throws Exception {
        BufferedWriter writer = response.getWriter();
        writer.write("Hello World!");
    }
}
```

### Trigger Pub/Sub

```java
public class Example implements BackgroundFunction<Message> {
  private static final Logger logger = Logger.getLogger(Example.class.getName());

  @Override
  public void accept(Message message, Context context) {
    String data = new String(Base64.getDecoder().decode(message.getData()));
    logger.info("Message: " + data);
  }
}

public class Message {
  String data;
  Map<String, String> attributes;
}
```

---

## Conclusions

### Advantages

* Programming focused on the business logic and not on the infrastructure;
* Event-driven programming;
* Autoscaling;
* Reduced cost.

### Disadvantages

* Not suitable for long-term tasks;
* Being stateless, implies that the state must be stored in external services;
* Low latency;
* Difficult to test and debug;
* Security and privacy issues;
* Vendor lock-in.