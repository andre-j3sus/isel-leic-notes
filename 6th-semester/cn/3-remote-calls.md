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

<p align="center">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211028122357/workingofRMI.jpg" width="600" alt="RMI"/>
</p>

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

### Remote Calls Semantics vs. Fault Tolerance

#### Exactly Once

* In a call, is assured that the **target** is **executed** **exactly once**;
* Calls in a local environment use this semantics;
* But in a remote environment faults can occur, and need to be handled using retransmission or other techniques;

#### Maybe Once

* In a call, it's not possible to assure that the **target** is executer or not;

#### At Least Once

* In a call, is assured that the **target** is **executed** **at least once**, always receiving a result or an exception;

#### At Most Once

* In a call, a result is always received, knowing that the **target** is executed only once, or an exception is received;
* This semantics is the most used actually;

---

### Coupling

#### Tight Coupling

* When both parts are **highly dependent**, with implementation dependencies, or the connections are **stateful**;

#### Loosely Coupling

* When both parts don't have implementation dependencies, only depending on the **interface**, and the connections are **stateless**;

---

## [Java RMI](https://docs.oracle.com/javase/7/docs/technotes/guides/rmi/hello/hello-world.html)

> **Java RMI** is a **Java API** that **enables** a **Java application** to **invoke methods** on **objects** that **reside** in **different address spaces**.

A **Java RMI** application consists of:

* **Remote interfaces** that **extend** the `java.rmi.Remote` interface;
* **Server** - **remote objects** that **implement** the **remote interfaces**;
* **Client** - client that invokes **remote methods** on **remote objects**;

### Remote Interface

* A **remote interface** extends the interface `java.rmi.Remote` and declares a set of remote methods;
* Each remote method must declare `java.rmi.RemoteException` (or a superclass of `RemoteException`) in its throws clause, in addition to any application-specific exceptions.

An example of a **remote interface**:

```java
public interface Hello extends Remote {
    String sayHello() throws RemoteException;
}
```

### Server - Remote Object

The server's main method does the following:

* Create and export a **remote object**;
* Register the **remote object** with the **RMI registry**.

```java
public class HelloServer implements Hello {
    public HelloServer() {}

    public String sayHello() {
        return "Hello, world!";
    }

    public static void main(String args[]) {
        try {
            HelloServer obj = new HelloServer();
            Hello stub = (Hello) UnicastRemoteObject.exportObject(obj, 0);

            // Bind the remote object's stub in the registry
            Registry registry = LocateRegistry.getRegistry();
            registry.bind("Hello", stub);

            System.err.println("Server ready");
        } catch (Exception e) {
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
```

As you can see, the remote object is exported using the `UnicastRemoteObject.exportObject()` method, which returns a **stub** for the remote object in the local address space.

Then the **stub** is bound in the **registry** using the `Registry.bind()` method.

### Client

The client program obtains the **stub** for the remote object from the **registry** and invokes the remote method on the remote object.

```java
public class HelloClient {
    private HelloClient() {}

    public static void main(String args[]) {
        try {
            // Getting the registry
            Registry registry = LocateRegistry.getRegistry();

            // Looking up the registry for the remote object
            Hello stub = (Hello) registry.lookup("Hello");

            // Calling the remote method using the obtained object
            stub.sayHello();

            System.err.println("Server response: " + response);
        } catch (Exception e) {
            System.err.println("Client exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
```