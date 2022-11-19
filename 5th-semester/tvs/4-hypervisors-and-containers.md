# [Hypervisors and Containers](https://mkaschke.medium.com/virtual-machine-vm-vs-container-13ab51f4c177)

Types of software and execution environments:

| Software          | Representation       | Execution Environment | Depends on OS? | Depends on Architecture? |
| ----------------- | -------------------- | --------------------- | -------------- | ------------------------ |
| JavaScript        | `.js`                | Node.js               | No             | No                       |
| Java              | `.jar` with `.class` | Java Virtual Machine  | No             | No                       |
| C/C++/Rust/Go/... | executables and libs | OS                    | Yes            | Yes                      |
| Dockerfile        | docker image         | Docker                | **Yes**        | **Yes**                  |
| assembly          | binary               | machine               | No             | Yes                      |


### Virtual Machines

> A virtual machine is the **virtualization/emulation** of a computer system.

There are two types of VMs:

* **Process VMs** (e.g. Java Virtual Machine, Node.js, Python, Ruby, etc.) - they are not real VMs, they are just processes that run on the host OS;
  * They are not isolated from the host OS, they can access the host OS resources;
  * Also known as **Virtual Execution Environments**;
* **System VMs** (e.g. VirtualBox, VMware, QEMU, etc.) - they are real VMs, they run on the host OS and are isolated from the host OS;
  * They are isolated from the host OS, they cannot access the host OS resources;
  * These VMs are managed by a **Virtual Machine Monitor** (VMM) also known as **Hypervisor**;

---

## Hypervisors

> Hypervisor is a software, firmware, or hardware that **creates and runs virtual machines**. 

* A computer on which a hypervisor runs one or more virtual machines is called a **host machine**, and each virtual machine is called a **guest machine**;
* A hypervisor may allow **multiple guest machines** to run concurrently on a single host machine;
* A host machine may run **multiple hypervisors** simultaneously, with each hypervisor supporting multiple guest machines;
* A hypervisor may also be referred to as a **virtual machine monitor (VMM)**.

There are **two types** of hypervisors:

* **Type 1** - native or bare-metal hypervisors:
  * Runs directly on the host's hardware to control the hardware and manage the guest operating systems;
* **Type 2** - hosted hypervisors:
  * Runs on top of an existing operating system (OS) as a software application;
  * The host OS is responsible for managing the hardware and the hypervisor is responsible for managing the guest OSes.


<p align="center">
    <img src="./docs/tvs-diagrams-Hypervisors.svg" alt="Hypervisors" align="center"/>
</p>

--- 

## Containers

> A container is a **standard unit of software** that **packages up code and all its dependencies** so the application runs quickly and reliably from one computing environment to another - [Docker](https://www.docker.com/resources/what-container).

* Containers are **isolated** from each other and bundle their own software, libraries and configuration files;
* They **share the OS kernel** with other containers, running as **lightweight processes**;
* Containers are **more portable** than VMs, and can run on any OS that supports containers;

<p align="center">
    <img src="./docs/tvs-diagrams-Containers.svg" alt="Containers" align="center"/>
</p>

---

## Main Differences

|                   | Hypervisors | Containers |
| ----------------- | ----------- | ---------- |
| **Start-up time** | Slow        | Fast       |
| **Disk space**    | Large       | Small      |

The isolation of VMs is achieved by the **virtualization** of the entire hardware, while the isolation of containers is achieved by the **virtualization** of individual processes, increasing portability and efficiency.