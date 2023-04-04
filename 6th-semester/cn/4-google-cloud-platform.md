# Google Cloud Platform 

> Google Cloud Platform (GCP) is a cloud computing platform and infrastructure that provides a set of modular cloud-based services. These services include computing, data storage, data analytics and machine learning.

<p align="center">
    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Google_Cloud_Covered.jpg" alt="GCP"/>
</p>

---
---

## GCP Services

* Data Storage (Cloud Storage, Cloud SQL, Cloud Bigtable, Cloud Datastore, Cloud Firestore, Cloud Spanner, Cloud Memorystore, Cloud Filestore)
* Messaging Publish/Subscribe (Pub/Sub)
* Compute (App Engine, Compute Engine, Kubernetes Engine, Cloud Functions)
* Data Processing (Big Data).

<p align="center">
    <img src="http://www.turbogeek.co.uk/wp-content/uploads/2019/02/word-image-4.png" alt="GCP Services"/>
</p>

---

### Data Storage

* **Disk storage**:
  * [**Persistent Disk**](https://cloud.google.com/persistent-disk/): disk storage that is attached to a virtual machine instance;
  * **Filestore**: network attached storage (NAS) that can be mounted on virtual machine instances;
* [**Cloud storage**](https://cloud.google.com/storage/): BLOBs (Binary Large Objects);
* **NoSQL**:
  * [**Firestore**](https://cloud.google.com/firestore/);
  * [**Datastore**](https://cloud.google.com/datastore/);
* **Relational**:
  * [**SQL**](https://cloud.google.com/sql/);
  * [**Spanner**](https://cloud.google.com/spanner/): relational database service with global consistency and horizontal scalability; 99.999% availability;
* **Memory storage**:
  * [**Memorystore**](https://cloud.google.com/memorystore/);
  * Redis.

---

### [Pub/Sub](https://cloud.google.com/pubsub)

* Implementation of the [**Pub/Sub**](https://cloud.google.com/pubsub/) pattern;
* **Pub/Sub** is a fully-managed messaging service that allows you to send and receive messages between independent applications;
* **Publishers** send messages to a **topic**;
* **Subscribers** receive messages from a **subscription**.

<p align="center">
    <img src="https://d1.awsstatic.com/product-marketing/Messaging/sns_img_topic.e024462ec88e79ed63d690a2eed6e050e33fb36f.png" alt="Pub/Sub"/>
</p>

---

### Compute

* **[Compute Engine](https://cloud.google.com/compute/docs/instances/)**: virtual machines;
  * Different configurations (nr. of CPUs, RAM, etc.);
  * **Regular** (start/stop controlled by the user) or **preemptible** (short-lived, low-cost, can be terminated at any time by Google);
  * Groups of virtual machines can be created using [**instance groups**](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) for load balancing and auto-scaling;
* [**Cloud Functions**](https://cloud.google.com/functions/): serverless computing;
* **Containers**:
  * [**Kubernetes Engine**](https://cloud.google.com/kubernetes-engine/): managed Kubernetes cluster;
  * [**Cloud Run**](https://cloud.google.com/run/): serverless computing for containers;
* [**App Engine**](https://cloud.google.com/appengine/): serverless computing for web applications;

#### Event-driven serverless computing

* Execution of code in response to events, in multiple languages, with auto-scaling;
* The cost only depends on the number of executions and the execution time;

<!--Add image-->

---

### Data Processing (Big Data)

* Artificial Intelligence:
  * [**Vision**](https://cloud.google.com/vision/): image recognition;
  * [**Translate**](https://cloud.google.com/translate/): text translation;

* Data Analytics:
  * [**BigTable**](https://cloud.google.com/bigtable/): NoSQL database;
  * [**BigQuery**](https://cloud.google.com/bigquery/): SQL database;
  * [**DataProc**](https://cloud.google.com/dataproc/): Hadoop and Spark clusters;
  * [**Genomics**](https://cloud.google.com/genomics/): genomic data processing.

---
---

## Web Console

> The [**Google Cloud Platform Console**](https://console.cloud.google.com/) is a web-based user interface that allows you to manage resources for your Google Cloud Platform projects.

### Accounts and Projects

* Any user with a Google account can access the GCP console;
* A user can have multiple projects;
* The projects exist in an **organization**;
* A user can have multiple **billing accounts**;
* One project has one **billing account**, but one billing account can be used by multiple projects.

### Budgets

* A billing account can zero or more budgets;
* A budget emits a **notification** when the budget is exceeded;
* A notification does not stop the billing, it just notifies the user.

### Access Control

* Based on **RBAC** (Role-Based Access Control);
* A project can have multiple members, that can represent a user, a group or a service account;
  * A **service account** is used to provide access to a service/resource.
