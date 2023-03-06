# Introduction to Cloud Computing

> *Cloud Computing refers to both the **application delivered as services** over the Internet and the **hardware and systems software in the datacenters** that provide those services.*

<p align="center">
    <img src="https://b.cloudcomputing.id/images/eece902c-0a29-4255-9163-e57597e79b7d/layanan-cloud-computing-l-min.jpg" alt="Cloud Computing" align="center" width="400" />
</p>


* Scalability/elasticity - **infinite** virtual resources;
* Pay-per-use - utility prices;
* Self-service interfaces;
* Virtualization - avoid acquisition/installation/maintenance of datacenters.

> *Cloud Computing is the **storing, processing and use of data on remotely located computers** accessed over the internet.*

There are multiple execution environments:

* Virtual machines;
* Containers;
* Web applications;
* Serverless;
* Databases.

**Energy** is a relevant cost for the provider:

`Power Usage Efficiency = Total Facility Energy / IT Equipment Energy`

### Auto Scaling

* Scale up and scale down;
* Algorithms to control and allocate resources with loads - **workloads**;
* Requires the computation and data distribution through multiple nodes.

---

## Cloud Computing Models

* **Private Cloud** - exclusive to an organization;
* **Community Cloud** - exclusive to a consumer community that share the same goals;
* **Public Cloud** - belongs to a provider, with multiple processing centers located in different countries; the consumers access the cloud using pay-per-use models, with different service layers (SLA - Service Level Agreement);
* **Hybrid Cloud**.

---

## Cloud Computing Stack

| Service Class                          | Access & Tools           | Service Contents                                                                             |
| -------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| **SaaS** (Software as a Service)       | Web Browser              | **Cloud Applications** (social networks, email, ...)                                         |
| **PaaS** (Platform as a Service)       | Development Environments | **Cloud Platform** (programming languages, frameworks, Web APIs, ...)                        |
| **IaaS** (Infrastructure as a Service) | Virtualization Manager   | **Cloud Infrastructure** (computer servers, data storage, firewall, load balancer, VPN, ...) |

---

## Cloudnomics: CAPEX vs. OPEX

***Total Cost of Ownership (TCO)***:

* **CAPEX - Capital Expenditure**: expenses that create future benefits; buy fixed assets; initial investment; significant cost;
* **OPEX - Operational Expenditure**: continuous/daily cost of the product/system execution.

---

## Challenges & Opportunities

* Avoid *vendor lock-in* - the interoperability between providers is very hard/inexistent;
* Uncertainty about physical control of the hardware, software and data;
* Migrate applications to public clouds is a complex process;
* *A dead Internet connection means no work*.

---

## Cloud Services Examples

* **Massive data storage**: Amazon S3, Azure Storage, Google Cloud Storage;
* **VM creation**: Amazon EC2, Azure VM, Google Compute Engine;
* **NoSQL data storage**: Amazon DynamoDB, Azure CosmosDB, Google Firestore;
* **Messages**: Azure Queues, Google Pub/Sub;
* **Data analytics**: Google MapReduce, TensorFlow. 

The top 3 Cloud Service Providers are:

* AWS - Amazon Web Services
* Microsoft Azure
* GCP - Google Cloud Platform (used in this course)

<p align="center">
    <img src="https://miro.medium.com/max/1400/1*YTVgxkvq3YLyHxJi9r1ktw.png" alt="Cloud Service Providers" align="center" width="400" />
</p>