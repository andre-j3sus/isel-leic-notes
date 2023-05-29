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
* **Cost only for the execution time** - in traditional cloud computing, the cost is for the whole time the instance is running;
* The code is **stateless** - the code does not have access to the state of the execution environment.

### Examples of Serverless Computing Services

* [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [Google Cloud Functions](https://cloud.google.com/functions)
* [OpenWhisk Apache](https://openwhisk.apache.org/)