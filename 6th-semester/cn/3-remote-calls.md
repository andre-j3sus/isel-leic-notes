# Remote Calls

## Sockets TCP/IP

* **TCP** is a **connection oriented** protocol that allows two hosts to establish a connection and exchange **streams** of data;
  * One host is the **client** and the other is the **server**;
  * The server is always listening for connections and the client initiates the connection;
* Once the connection is established, the client and server can exchange data, in a **reliable** way, through streams in **both directions**, until the connection is closed;
* To allow the existence of multiple connections, `(IP, port)` pairs are used to identify the connections;

| Primitive          | Description                                        |
| ------------------ | -------------------------------------------------- |
| `socket()`         | Creates a socket                                   |
| `bind()`           | Binds a socket to a pair `(IP, port)`              |
| `listen()`         | Puts the socket in listening mode                  |
| `accept()`         | Blocks until a connection is established           |
| `connect()`        | Establishes a connection to a server               |
| `send()`/`write()` | Sends data to the other end of the connection      |
| `recv()`/`read()`  | Receives data from the other end of the connection |
| `close()`          | Closes the socket                                  |

<p align="center">
    <img src="https://www.researchgate.net/publication/349147426/figure/fig12/AS:989602185744386@1612950955194/Simplified-diagram-of-TCP-IP-based-socket-communication-Adapted-from-18.ppm" width="400" alt="TCP Connection"/>
</p>

> **Note**: In Java, the `Socket` class represents a socket and the `ServerSocket` class represents a server socket. This classes are implemented in the `java.net` package.

* The concurrency in the server must be explicit, and handled by the programmer;
* The protocol to exchange data depend on the stream of data, and implies the use of a **serialization** mechanism, like **XML** or **JSON**;

---

## Remote Method Invocation (RMI)

> A **remote method invocation** is a **request** to execute a **method** on an **object** that resides in a **different address space**.

> A **remote object** is an **object** that **resides** in a **different address space**, providing an accessible **remote interface** allowing **remote method invocation**.

### Proxy (Client) and Skeleton (Server)

* A **proxy** is an **object** that **resides** in the **client address space** and **implements** the **remote interface**;
  * When receives a **remote method invocation**, the **proxy** **serializes**(**marshalling**) the **arguments** and **sends** them to the **skeleton**;

* A **skeleton** is an **object** that **resides** in the **server address space** and **implements** the **remote interface**;
  * When receives a **remote method invocation**, the **skeleton** **deserializes**(**unmarshalling**) the **arguments**, **executes** the **method** and **serializes**(**marshalling**) the **result**;

> **Note**: The **proxy** and **skeleton** are **transparent** to the **client** and **server**, and are usually called **stubs**.

### Registry Intermediary

* In the 80/90s, was defined an standard called **DCE (Distributed Computing Environment)**, that defines a triangle of **communication** between the **client**, the **server** and the **registry**;
  * An intermediary service called **registry** or **directory server** is used to **register** the **remote objects**;
  * The **client** uses the **registry** to **lookup** the **remote object**;
* A **DCE daemon** allowed that the same machine provided multiple services in different ports;

---

## Remote Calls Semantics vs. Fault Tolerance

### Exactly Once

* In a call, is assured that the **target** is **executed** **exactly once**;
* Calls in a local environment use this semantics;
* But in a remote environment faults can occur, and need to be handled using retransmission or other techniques;

### Maybe Once

* In a call, it's not possible to assure that the **target** is executer or not;

### At Least Once

* In a call, is assured that the **target** is **executed** **at least once**, always receiving a result or an exception;

### At Most Once

* In a call, a result is always received, knowing that the **target** is executed only once, or an exception is received;
* This semantics is the most used actually;

---

## Coupling

### Tight Coupling

* When both parts are **highly dependent**, with implementation dependencies, or the connections are **stateful**;

### Loosely Coupling

* When both parts don't have implementation dependencies, only depending on the **interface**, and the connections are **stateless**;