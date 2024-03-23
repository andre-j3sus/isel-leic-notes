# Application Layer

* **Applications** run on different end systems and communicate over a network;
* **Application Layer Protocols** define the rules for the communication between applications - the top layer of the TCP/IP protocol stack;
* There are two types of applications:
  * **Client-Server Applications** - one side initiates the communication and the other side responds;
    * **Server** - provides services to clients;
      * **Always-on** - always available to provide services;
      * **Static IP Address** - clients know the server's address;
      * **Data Centers** - large-scale servers;
    * **Client** - requests services from servers;
      * **Dynamic IP Address** - assigned by the network when the client connects;
      * **Intermittently Connected** - not always connected to the network;
  * **Peer-to-Peer (P2P) Applications** - both sides can initiate the communication;
    * **No Always-on Server** - peers can be clients and servers;
    * **Self-Scaling** - the more peers, the more resources;
    * **Dynamic IP Address** - assigned by the network when the peer connects;
    * **Intermittently Connected** - not always connected to the network;
    * **Decentralized** - no central server;
* A **process** is a program running within a host;
  * Within the same host, processes communicate using **inter-process communication**, defined by the operating system;
  * Processes in different hosts communicate using **message passing**;
  * **Client processes** initiate the communication, while **server processes** wait to be contacted;
  * A process sends/receives messages to/from its **socket** - the interface between the application layer and the transport layer;
  * To identify a process, we use the **IP address** and the **port number**.

---

## Web and HTTP

* **Web** - a client-server application;
  * **Web Clients** - browsers;
  * **Web Servers** - store web pages and send them to clients;
* **[Uniform Resource Locator (URL)](https://en.wikipedia.org/wiki/URL)** - identifies the web page;
  * **Scheme** - protocol used to access the resource;
  * **Authority** - the server's domain name or IP address;
    * **Host** - the server's domain name or IP address;
    * **Port** - the server's port number;
  * **Path** - the resource's location on the server;
  * **Query** - parameters to be passed to the server;
  * **Fragment** - a reference to a specific part of the resource;

* **HyperText Transfer Protocol (HTTP)** - the protocol used to transfer web pages;
  * **Stateless Protocol** - each request/response pair is independent;
  * **Persistent Connections** - multiple requests/responses can be sent over the same connection;
  * Uses **TCP** as the transport layer protocol - creates a connection (creates a socket), sends the request, receives the response, and closes the connection;
  * **Round-Trip Time (RTT)** - the time it takes for a small packet to travel from the client to the server and back;
  * **HTTP Request**:
    * **Request Line** - method, URL, and HTTP version;
    * **Headers** - additional information about the request;
    * **Body** - data sent to the server;
    * **Example**:
      ```
      GET /index.html HTTP/1.1
      Host: www.example.com
      Connection: close
      ```
  * **HTTP Response**:
    * **Status Line** - HTTP version, status code, and status message;
    * **Headers** - additional information about the response;
    * **Body** - data sent by the server;
    * **Example**:
      ```
      HTTP/1.1 200 OK
      Date: Mon, 23 May 2005 22:38:34 GMT
      Content-Type: text/html
      Content-Length: 155
      <html>
      <body>
      <h1>Hello, World!</h1>
      </body>
      </html>
      ```
  * **HTTP Methods**:
    * **GET** - requests a resource;
    * **POST** - sends data to the server;
    * **PUT** - uploads a resource;
    * **DELETE** - deletes a resource;
    * **HEAD** - requests the headers of a resource;
    * **OPTIONS** - requests the server's capabilities;
    * **TRACE** - echoes the request back to the client;
  * **HTTP Status Codes**:
    * **1xx** - informational;
    * **2xx** - success - e.g., 200 OK, 201 Created;
    * **3xx** - redirection - e.g., 301 Moved Permanently, 302 Found;
    * **4xx** - client error - e.g., 400 Bad Request, 404 Not Found;
    * **5xx** - server error - e.g., 500 Internal Server Error, 503 Service Unavailable.

---

## Email

...

---

## DNS

...

---

## P2P

...

---

## CDN