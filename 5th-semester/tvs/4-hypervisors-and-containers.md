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
  * The main purpose of these VMs is to **translate the Instruction Set** of the guest OS to the **Instruction Set** of the host OS; 
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

> **Note: Paravirtualization**
> Paravirtualization is a type of virtualization technique that allows virtual machines (VMs) to run on a host computer with **minimal modification to the host's kernel**. This is achieved by creating a thin layer of software between the virtual machine and the host's hardware, which allows the **virtual machine to communicate with the host's resources directly**, rather than emulating them.
> 
> In contrast to full virtualization, paravirtualization **requires that the guest operating system be modified to work in the virtualized environment**, and it requires a paravirtualized hypervisor.
>
> One of the main **advantages** of paravirtualization is that it can i**mprove the performance** of virtual machines by **reducing the overhead caused by hardware emulation**. It also allows for greater control over the virtualized environment, which can be useful in high-performance computing and other resource-intensive applications.

However, paravirtualization also has some **disadvantages**, such as the **requirement of modification of the guest operating system** and the fact that it **is not as flexible as full virtualization**. It also typically only works with specific operating systems and hypervisors.

---

## Containers

> A container is a **standard unit of software** that **packages up code and all its dependencies** so the application runs quickly and reliably from one computing environment to another - [Docker](https://www.docker.com/resources/what-container).

* Containers are **isolated** from each other and bundle their own software, libraries and configuration files;
* They **share the OS kernel** with other containers, running as **lightweight processes**;
* Containers are **more portable** than VMs, and can run on any OS that supports containers;
* The main purpose of containers is to **distribute and install software in an isolated execution context**, in a much **more efficient and scalable** way compared to the use of virtual machines;
* _Containers provide isolated environments, with all the resources (file system, networks, etc.) necessary for the execution of a given application or (micro-)service._

> In Linux, the support for the construction of containers is performed through a set of kernel services that allow, in particular, the **creation of different namespaces for various resources**, thus delimiting the resources accessible to the processes, and the definition of access quotas (**cgroups**) to certain physical resources.

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
---

## [Docker](https://www.docker.com/)

> Docker is a set of platform as a service (PaaS) products that use **OS-level virtualization to deliver software in packages** called **containers**.

### Architecture

_Docker uses a client-server architecture: the **Docker client** talks to the **Docker daemon**, which does the heavy lifting of building, running, and distributing your Docker containers._

<p align="center">
    <img src="https://docs.docker.com/engine/images/architecture.svg" alt="docker-architecture" align="center"/>
</p>

* **Docker Client** (`docker`) - the primary way that many Docker users interact with Docker;
  * The list of commands can be found [here](https://docs.docker.com/engine/reference/commandline/docker/);
* **Docker Daemon** (`dockerd`) - listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes;
* **Docker Objects** - images, containers, networks, and volumes;
* **Docker Registries** - stores Docker images (e.g. Docker Hub, Docker Cloud, etc.);
* **Docker Desktop** - a graphical user interface (GUI) for the Docker Engine that runs on Windows, Mac, and Linux.

---

### Image

> _An **image** is a **read-only template** with instructions for creating a Docker container;_

* Contains everything needed to run an application - all dependencies, configurations, scripts, binaries, etc;
* Provides a filesystem and a set of parameters which can be used to create a container;
* Also contains other configuration, such as **environment variables** and **entrypoint**;
* To create a container, you need an image;
* To create an image, you need a [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) - a text document that contains all the commands a user could call on the command line to assemble an image;
* The `docker build` command builds an image from a `Dockerfile` and a **context**;

### Container

> _A **container** is a **sandboxed process** on your machine that is **isolated** (file system, network, process tree, etc.) from all other processes on the machine;_

* Is a runnable instance of an **image**;
* You can create, start, stop, move, or delete a container using the Docker API or CLI;
* Is portable;
* Is isolated from other containers, running its own software, binaries and configurations.

### [Network](https://docs.docker.com/network/)

> _A **network** is a set of **rules** that define how containers **communicate** with each other and external networks;_

* Docker’s networking subsystem is pluggable, using drivers:
  * `bridge` - the default network driver;
  * `host` - removes network isolation between the container and the Docker host, and uses the host’s networking directly;
  * `overlay` - for multi-host networking;
  * `ipvlan`;
  * `macvlan`;
  * `none` - removes all networking for a container.

### [Volume](https://docs.docker.com/storage/volumes/)

> _Volumes are the preferred mechanism for persisting data generated by and used by Docker containers;_

* Volumes are stored in a part of the host filesystem which is managed by Docker;
* Volumes are **not** tied to the lifecycle of a container;

---

## [Layering](https://docs.docker.com/storage/storagedriver/)

> _Docker uses a **union file system** ([overlayFS](https://docs.docker.com/storage/storagedriver/overlayfs-driver/)) to **layer** images and containers;_

* A **union file system** is a file system that operates by **creating layers**, making them **seamlessly** **stackable**;
* A **Docker image is built up from a series of layers**. Each layer represents an instruction in the image’s Dockerfile. Each layer except the very last one is read-only;
* When you make a change to an image, a new layer is created that applies specifically to that change;
* The **union file system** combines the layers into a single view (**upper**);
* The **union file system** uses a **copy-on-write** strategy, which means that it only copies a file the first time you modify it - after that, it keeps writing to the same copy.

---

## [Compose](https://docs.docker.com/compose/)

> _Compose is a tool for defining and running multi-container Docker applications;_

* Compose is a **declarative** way to define and run multi-container Docker applications, using a YAML file to configure the application’s services;
* With Compose, use a YAML file to configure services, networks and volumes.
