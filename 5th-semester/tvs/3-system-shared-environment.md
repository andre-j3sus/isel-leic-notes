# System Shared Environment

<p align="center">
    <img src="./docs/tvs-diagrams-OS.svg" alt="OS" align="center"/>
</p>

---

## IPC - Inter-Process Communication

* Shared Memory;
* Data exchange via Kernel;
  * **Named Pipes** (fifo);
  * **Unix Domain Sockets**.

### Named Pipes

* **FIFO** - First In First Out;
* Extension to the traditional pipe concept on Unix, and is one of the methods of inter-process communication;
* Created by the `mkfifo` function;
* **Unidirectional** communication.

### Unix Domain Sockets

* **AF_UNIX** - Address Family Unix;
* **Bidirectional** communication;
* Functions:
  * `socket()` - create a socket;
  * `bind()` - bind a name to a socket;
  * `listen()` - listen for connections on a socket;
  * `accept()` - accept a connection on a socket;
  * `connect()` - initiate a connection on a socket.

---
---

## [Systemd](https://systemd.io/)

> _Systemd is a suite of **basic building blocks for a Linux system**. It provides a system and service manager that runs as **PID 1** and starts the rest of the system. It also provides a D-Bus-activated system bus, which other processes can use to talk to the system manager and interact with it._

* **PID 1** - Process ID 1 is the first process started by the kernel when the system boots;
* Systemd is a **system and service manager**;
* **SysVinit** - System V initialization is an old system for starting and stopping services on Unix-like operating systems;
  * **Run levels** - Run levels are a way of categorizing the state of a system; they are used to determine which services should be started and stopped; In Systemd, run levels are called **targets**;

> A service is a process or a group of processes that are started by the system manager and that are intended to provide a specific functionality. Services can be started and stopped at any time by the system manager or by the user.

In Linux systems, services are also called **daemons**;

---

### Unit Blocks

> A unit is a configuration file that describes a system resource, such as a device, a mount point, a socket, a swap file, a service, or a target.

* **Unit** is the basic building block of **systemd**;

#### Unit Types

* **Service**
  * `.service`;
  * (described above);
* **Socket**
  * `.socket`;
  * Sockets are used to **start services when a client connects to them**. They are used for services that are not started by default, but are started when a client connects to them;
  * When a socket is inactive, it is not listening for connections, and so the service cannot be started;
* **Target**
  * `.target`;
  * Targets are used for **grouping and ordering units**. They are somewhat of a rough equivalent to runlevels in that at different targets, different services, sockets, and other units are started. Unlike runlevels, they are much more free-form and you can easily make your own targets for ordering units, and targets have dependencies among themselves.

---

#### Unit Status

Some of the most common status headers are:

* `Loaded` - indicates whether the unit is loaded or not;
  * Can be `loaded` or `not-found`;
  * Has the `enabled` status, which indicates whether the unit is enabled or not; If the unit is not loaded, it cannot be enabled;
* `Active` - indicates whether the unit is active or not;
  * Can be `active` or `inactive`;
* `Docs` - contains the documentation for the unit;
* `Main PID` - contains the process ID of the main process of the unit;
* `CGROUP` - contains the control group of the unit;
  * The control group is a mechanism for **controlling the resources** used by a set of processes;
* `TriggeredBy` - contains the units that triggered the unit;
  * Usually, **a service is triggered by a socket**;
* `Triggers` - contains the units that the unit triggers;
  * Usually, **a socket triggers a service**;

---

#### Managing Units

`systemctl` - is a command-line tool for controlling the systemd system and service manager;

To use the `systemctl` command, you need to install the `systemd` package (which is already installed on most Linux distributions): `sudo apt install libsystemd-dev`;

Here are some of the most common commands:

* `systemctl list-units` - lists all units;
* `systemctl status <unit>` - shows the status of a unit;
* `systemctl start <unit>` - starts a unit;
* `systemctl stop <unit>` - stops a unit;
* `systemctl restart <unit>` - restarts a unit;
* `systemctl enable <unit>` - enables a unit;
* `systemctl disable <unit>` - disables a unit;
* `systemctl list-dependencies <unit>` - lists the dependencies of a unit.

---

### [Service Templates](https://www.freedesktop.org/software/systemd/man/systemd.service.html#Service%20Templates)

> A service template is a unit that is used to create multiple instances of a service. It is a template that is instantiated for each instance of the service. The template is used to define the common properties of the service, and the instances are used to define the properties that are specific to each instance.

* It is possible to create a service template by adding the `@` character to the end of the service unit file name: `service@.service`;
* To create a service instance, you need to start the service template with the `@` character and the argument that will be passed to the template: `sudo systemctl start service@argument`;

---

### [Installing a Service](https://linuxhandbook.com/create-systemd-services/)

* To install a service, you need to create a service unit file in the `/etc/systemd/system` directory;
* The service unit file must have the `.service` extension;
* The service unit file must have the following structure:

```ini
[Unit]
Description=Description of the service
After=network.target
Before=nextcloud-web.service

[Service] 
Type=simple
ExecStart=/path/to/executable 
# Other options

[Install]
WantedBy=multi-user.target # The target that will be used to start the service
RequiredBy=network.target # The target that will be used to start the service
```

The `[Unit]` section contains the options that are **common to all types of units**:

* `Description` - contains the description of the service;
* `After` - contains the units that the service will be started after;
* `Before` - contains the units that the service will be started before;

The `[Service]` section contains the options that are **specific to services**:

* `ExecStart` - contains the command that will be executed when the service is started;
* `Type` - contains the type of the service;
  * `simple` - the service will be started in the foreground;
  * `forking` - the service will be started in the background;
  * `oneshot` - the service will be started only once;
  * `dbus` - the service will be started as a D-Bus service;
  * `notify` - the service will be started as a notification service;
  * `idle` - the service will be started as an idle service;
* `Restart` - contains the restart policy of the service;
  * `no` - the service will not be restarted;
  * `on-failure` - the service will be restarted if it fails;
  * `on-abnormal` - the service will be restarted if it fails or is terminated abnormally;
  * `on-watchdog` - the service will be restarted if it fails or is terminated by a watchdog timeout;
  * `on-abort` - the service will be restarted if it fails or is terminated by an abort signal;
  * `always` - the service will be restarted always.
* etc.

The `[Install]` section contains the options that are **common to all types of units** (this is the section that is used to enable the service):

* `WantedBy` - contains the targets that will be used to start the service; this is similar to the `After` option in the `[Unit]` section, but is used to **specify systemd targets**;
* `RequiredBy` - contains the targets that will be used to start the service; this is similar to the `Before` option in the `[Unit]` section, but is used to **specify systemd targets**;
