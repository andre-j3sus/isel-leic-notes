# [Hypervisors and Containers](https://mkaschke.medium.com/virtual-machine-vm-vs-container-13ab51f4c177)

Types of software and execution environments:

| Software          | Representation       | Execution Environment | Depends on OS? | Depends on Architecture? | Supported by an OS process? |
| ----------------- | -------------------- | --------------------- | -------------- | ------------------------ | --------------------------- |
| JavaScript        | `.js`                | Node.js               | No             | No                       | Yes                         |
| Java              | `.jar` with `.class` | Java Virtual Machine  | No             | No                       | Yes                         |
| C/C++/Rust/Go/... | executables and libs | OS                    | Yes            | Yes                      | Yes                         |
| Dockerfile        | docker image         | Docker System         | **Yes**        | **Yes**                  | No                          |
| Assembly          | binary               | Machine               | No             | Yes                      | No                          |


### Virtual Machines

> A virtual machine is the **virtualization/emulation** of a computer system.

There are two types of VMs:

* **Process VMs** (e.g. Java Virtual Machine, Node.js, Python, Ruby, etc.) - they are not real VMs, they are just processes that run on the host OS;
  * They are not isolated from the host OS, they can access the host OS resources;
  * Also known as **Virtual Execution Environments**;
* **System VMs** (e.g. VirtualBox, VMware, QEMU, etc.) - they are real VMs, they run on the host OS and are isolated from the host OS;
  * They are isolated from the host OS, they cannot access the host OS resources;
  * These VMs are managed by a **Virtual Machine Monitor** (VMM) also known as **Hypervisor**;

A VM can also be classified into two types:

* **Translates the IS** (e.g. Android Emulator, JVM, etc.) - they translate the **Instruction Set** of the guest OS to the **Instruction Set** of the host OS;
* **Does not translate the IS** (e.g. QEMU, VirtualBox, etc.) - they do not translate the **Instruction Set** of the guest OS to the **Instruction Set** of the host OS;

> **Note:** Emulator vs. Simulator
> * **Emulator** - it is a software that emulates the **hardware** of a device;
> * **Simulator** - it is a software that simulates the **behavior** of a device;

---

## Hypervisors

> Hypervisor is a software, firmware, or hardware that **creates and runs virtual machines**. 

* A computer on which a hypervisor runs one or more virtual machines is called a **host machine**, and each virtual machine is called a **guest machine**;
* A hypervisor may allow **multiple guest machines** to run concurrently on a single host machine;
* A host machine may run **multiple hypervisors** simultaneously, with each hypervisor supporting multiple guest machines;
* A hypervisor may also be referred to as a **virtual machine monitor (VMM)**.

There are **two types** of hypervisors:

* **Type 1** - native or bare-metal hypervisors:
  * VMM and VMs **run directly on the hardware**;
  * Runs directly on the host's hardware to control the hardware and manage the guest operating systems;
* **Type 2** - hosted hypervisors:
  * VMM run on top of an **operating system** and VMs run on top of the VMM;
  * Runs on top of an existing operating system (OS) as a software application;
  * The host OS is responsible for managing the hardware and the hypervisor is responsible for managing the guest OSes;
  * Address translation occurs twice: once by the host OS and once by the hypervisor;

<p align="center">
    <img src="./docs/tvs-diagrams-Hypervisors.svg" alt="Hypervisors" align="center"/>
</p>

> **Note:** In AMD64 architecture, the **EL2** is for **type 1 hypervisors**.

---

## Containers

> A container is a **standard unit of software** that **packages up code and all its dependencies** so the application runs quickly and reliably from one computing environment to another - [Docker](https://www.docker.com/resources/what-container).

* Containers are **isolated** from each other and bundle their own software, libraries and configuration files;
* They **share the OS kernel** with other containers, running as **lightweight processes**;
* Containers are **more portable** than VMs, and can run on any OS that supports containers;

<p align="center">
    <img src="./docs/tvs-diagrams-Containers.svg" alt="Containers" align="center"/>
</p>

### Main Differences

|                   | Hypervisors | Containers |
| ----------------- | ----------- | ---------- |
| **Start-up time** | Slow        | Fast       |
| **Disk space**    | Large       | Small      |

The isolation of VMs is achieved by the **virtualization** of the entire hardware, while the isolation of containers is achieved by the **virtualization** of individual processes, increasing portability and efficiency.

---

## [WSL - Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/)

> The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a virtual machine.

There are **two versions** of WSL:

* **WSL 1**:
  * It is a **compatibility layer** for running **Linux binary executables** (ELF format) natively on Windows;
* **WSL 2**:
  * Includes **full Linux kernel** with **system call** compatibility with Windows, running in a **lightweight virtual machine** (VM);
  * Runs on top of **Hyper-V** - a **hypervisor** that allows **multiple VMs** to run on a single host machine (Windows);

<p align="center">
    <img src="./docs/tvs-diagrams-WSL.svg" alt="WSL" align="center"/>
</p>

---

## [Docker](https://www.docker.com/)

> Docker is a set of platform as a service (PaaS) products that use **OS-level virtualization to deliver software in packages** called **containers**.

### Container

> _A **container** is a **sandboxed process** on your machine that is **isolated** (file system, network, process tree, etc.) from all other processes on the machine;_

* Is a runnable instance of an **image**;
* You can create, start, stop, move, or delete a container using the Docker API or CLI;
* Is portable;
* Is isolated from other containers, running its own software, binaries and configurations.

### Image

> _An **image** is a **read-only template** with instructions for creating a Docker container;_

* Contains everything needed to run an application - all dependencies, configurations, scripts, binaries, etc;
* Provides a filesystem and a set of parameters which can be used to create a container;
* Also contains other configuration, such as **environment variables** and **entrypoint**;
* To create a container, you need an image;
* To create an image, you need a `Dockerfile` - a text document that contains all the commands a user could call on the command line to assemble an image;
* The `docker build` command builds an image from a `Dockerfile` and a **context**;

### Basic Docker Commands

* `docker run` - **creates** and runs a container;
* `docker ps` - **lists** all running containers;
  * To list all containers, use the `-a` flag;
* `docker image list` - **lists** all images;

<!--To be continued...-->
