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

There are three main components of an email system:

* **User Agents** - email clients (e.g., Outlook, Thunderbird);
  * Compose, read, reply, forward, save, and delete emails;
* **Mail Servers** - store and forward emails;
  * **Mailbox** - stores incoming emails;
  * **Message queue** - stores outgoing emails;
* **Simple Mail Transfer Protocol (SMTP)** - the protocol used to send emails between mail servers;
  * Uses **TCP** as the transport layer protocol, port 25;
  * **Persistent Connections** - multiple emails can be sent over the same connection;
  * 7-bit ASCII encoding;
  * Interaction with the server:
    * **Handshake** - client connects to the server;
    * **Mail Transfer** - client sends the email;
    * **Closure** - client disconnects from the server;
  * **Commands** and **Responses**, similar to HTTP;
  * Messages are sent in **MIME** format: headers and body;
* **Mail Access Protocols** - used by the user agent to retrieve emails from the server;
  * **Post Office Protocol (POP)** - authorization and download of emails;
    * **POP3** - version 3;
  * **Internet Message Access Protocol (IMAP)** - keeps emails on the server and synchronizes them with the client;
  * **HTTP** - web-based email clients.

---

## [DNS](https://www.youtube.com/watch?v=UVR9lhUGAyU)

* **Domain Name System (DNS)** - translates domain names into IP addresses;
* DNS is a **distributed database** implemented in a hierarchy of servers;
* Hosts **query** the DNS servers to **resolve** domain names;
* **DNS Services**:
  * **Hostname to IP Address Translation** - the most common service;
  * **Mail Server Alias** - maps domain names to mail servers;
  * **Load Balancing** - maps domain names to multiple IP addresses;
* Its distributed nature allows for **scalability** and **reliability**;
* **DNS Hierarchy**:
  * **Root Servers** - the top-level servers;
  * **Top-Level Domain (TLD) Servers** - servers for each TLD - `.com`, `.org`, `.net`, etc.;
  * **Authoritative Servers** - servers for each domain - `example.com`, `example.org`, etc.;
  * **Local DNS Servers** - the user's ISP DNS server;
* Example:
  * Client wants to resolve `www.example.com`;
  * First, checks its **cache**, but the entry is not there;
  * Then, asks the **local DNS server** to resolve the domain;
  * The local DNS server asks the **root server** for the **com** TLD server;
  * The com TLD server asks the **authoritative server** for the **example.com** domain;
  * The authoritative server responds with the IP address;
  * The local DNS server caches the response and sends it to the client.

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1400/0*w4_IIjmSUdtMp-hT" alt="DNS" width="300px">
</p>

* Once a DNS server resolves a domain name, it **caches** the result for a certain amount of time - the **Time to Live (TTL)**;
* **DNS record** - a mapping between a domain name and an IP address, with the format: `(name, value, type, TTL)`;
  * Types:
    * **A** - `name` is hostname, `value` is IP address;
    * **NS** - `name` is domain, `value` is authoritative server;
    * **MX** - `name` is domain, `value` is mail server;
    * **CNAME** - `name` is alias, `value` is canonical name;
    * **PTR** - `name` is IP address, `value` is hostname;
* **DNS protocol** - uses **UDP** as the transport layer protocol, port 53;
  * **Query** - client sends a query to the server;
  * **Reply** - server sends a response to the client;
  * **Message Format** for both queries and replies:
    * **Header** - identification, flags, number of questions, answers, authority, and additional records;
    * **Question** - domain name and type;
    * **Answer** - domain name, type, class, TTL, and value;
    * **Authority** - domain name, type, class, TTL, and value;
    * **Additional** - domain name, type, class, TTL, and value;
* To insert a new domain into the DNS system, the domain owner must:
  * **Register** the domain with a **registrar**;
  * **Provide** the registrar with the **IP address** of the **authoritative server**;
  * The registrar **notifies** the **TLD server** of the new domain;
* There are several attacks that can be performed on the DNS system:
  * **DDoS** - Distributed Denial of Service - bombard the DNS servers with requests, not very effective in root servers, but is more dangerous on TLD servers;
  * **Redirect** - redirect the DNS queries to malicious servers - **DNS poisoning**.

---

## P2P

* **Decentralized** - no central server;
* Arbitrary end systems can **directly communicate**;
* Examples:
  * **File Sharing** - e.g., BitTorrent;
  * **Streaming** - e.g., Skype, Zoom;
  * **Collaboration** - e.g., Google Docs;
* **Torrent** - a group of peers exchanging **chunks** of a file;
  * **Seeder** - peer with the complete file;
  * **Tracker** - server that coordinates the peers;
  * Peers **download** and **upload** chunks of the file;
  * **Churn** - peers join and leave the network;
  * **Tit-for-Tat** - peers prefer to upload to other peers that upload to them.

---

## [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)

* **Content Distribution Networks (CDNs)** are **geographically distributed** network of proxy servers and their data centers;
* The goal is to provide **high availability** and **performance** by distributing the service spatially relative to end users.
