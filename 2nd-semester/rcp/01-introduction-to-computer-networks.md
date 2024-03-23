# Introduction to Computer Networks

## Internet

* **Internet** is a **network of networks** - interconnected ISPs (Internet Service Providers);
  * Infrastructure that provides **services** to users and applications;
* **Protocols** define the **format** and **order** of messages exchanged between two or more communicating entities, as well as the **actions** taken on the transmission and/or receipt of a message;
  * e.g., HTTP, SMTP, FTP, TCP, IP, Ethernet, 802.11 (Wi-Fi);
* **Internet Standards** define the protocols used in the Internet;
  * **Request for Comments (RFCs)** are the documents that describe the standards and protocols used in the Internet;
  * **Internet Engineering Task Force (IETF)** is the organization that develops and promotes Internet standards;
* **Network** has the following structure:
  * **Network Edge** - hosts (end systems) that run application programs;
  * **Access Networks, Physical Media** - communication links that connect end systems to the network core;
  * **Network Core** - interconnected routers that forward packets.

### Internet Structure

* **Tier-1 ISPs** are the top-level ISPs that connect to each other to form the Internet backbone;
* **Tier-2 ISPs** are the middle-level ISPs that connect to Tier-1 ISPs to provide Internet access to end users;
* **Tier-3 ISPs** are the bottom-level ISPs that connect to Tier-2 ISPs to provide Internet access to end users;
* **Peering** is the relationship between two ISPs that allows them to exchange traffic without charging each other;
* **Internet Exchange Points (IXPs)** are the locations where ISPs connect to each other to exchange traffic;
* **Regional ISPs** are the ISPs that provide Internet access to a specific region;
* **Content Providers** are the companies that provide content and services over the Internet.

---

## Network Edge

* **End Systems** are the devices that run application programs;
  * e.g., PCs, smartphones, web servers;
* **Hosts** are end systems that are connected to the Internet;
  * **Clients** are hosts that request services from servers;
  * **Servers** are hosts that provide services to clients - often located in **data centers**.

### Access Networks

* **Access Networks** connect end systems to the network core;
* **Bandwidth** is the transmission rate of a communication link in bits per second (bps);
* **Throughput** is the actual transmission rate of a communication link in bits per second (bps);
* There are different types of access networks:
  * **Digital Subscriber Line (DSL)** - uses existing telephone lines to provide high-speed data connections;
    * Uses **modems** to convert digital data to analog signals for transmission over the telephone lines;
    * **Dedicated Line** - provides a direct connection between the customer and the telephone company's central office;
    * < 2.5 Mbps upstream transmission rate;
    * < 24 Mbps downstream transmission rate;
  * **Cable Network** - uses existing cable television infrastructure to provide high-speed data connections;
    * Uses **cable modems** to convert digital data to analog signals for transmission over the cable television infrastructure;
    * **Frequency Division Multiplexing (FDM)** is used to separate the television channels from the data channels;
    * **Hybrid Fiber-Coax (HFC)** is used to connect the cable headend to the neighborhood;
    * **Shared Line** - provides a shared connection between the customer and the cable company's headend;
  * **Fiber** - uses optical fibers to provide high-speed data connections;
    * **Passive Optical Network (PON)** is used to connect the optical line terminal to the optical network units;
    * **GPON** is a type of PON that uses **Gigabit Ethernet** to connect the optical line terminal to the optical network units;
      * Up to 2.5 Gbps upstream transmission rate;
      * Up to 1.25 Gbps downstream transmission rate;
    * **Shared Line** - provides a shared connection between the customer and the company's headend;
  * **Wireless** - uses radio waves to provide high-speed data connections;
    * **Wireless Access Points (WAPs)** are used to connect wireless devices to the network;
  * **Ethernet** - uses Ethernet cables to provide high-speed data connections;
    * **Ethernet Switches** are used to connect Ethernet cables to the network.

### Physical Media

* **Physical Media** are the communication links that connect end systems to the network core;
  * **Bit** is the smallest unit of data propagated through a network;
  * **Physical link** is the connection between the transmitter and the receiver;
  * **Guided Media** are the physical links that guide the electromagnetic signals along a specific path;
    * e.g., twisted pair, coaxial cable, fiber optic cable;
  * **Unguided Media** are the physical links that allow the electromagnetic signals to propagate freely;
    * e.g., radio waves, microwaves, infrared;
* **Twisted Pair** is a type of guided media that uses twisted pairs of copper wires to transmit data;
  * **Unshielded Twisted Pair (UTP)** is a type of twisted pair that does not have a shield around the copper wires;
  * **Shielded Twisted Pair (STP)** is a type of twisted pair that has a shield around the copper wires;
  * **Category 5e (Cat 5e)** is a type of twisted pair that can transmit data at a rate of 1000 Mbps;
  * **Category 6 (Cat 6)** is a type of twisted pair that can transmit data at a rate of 10 Gbps;
* **Coaxial Cable** is a type of guided media that uses a copper core surrounded by a shield to transmit data;
  * **Broadband Coaxial Cable** is a type of coaxial cable that can transmit data at a rate of 1 Gbps;
* **Fiber Optic Cable** is a type of guided media that uses glass or plastic fibers to transmit data;
  * **Single-Mode Fiber** is a type of fiber optic cable that uses a single mode of light to transmit data;
  * **Multi-Mode Fiber** is a type of fiber optic cable that uses multiple modes of light to transmit data;
  * **Broadband Fiber Optic Cable** is a type of fiber optic cable that can transmit data at a rate of 10 Gbps;
* **Radio Waves** are a type of unguided media that uses radio waves to transmit data;
  * e.g., Wi-Fi, Bluetooth.

---

## Network Core

* **Network Core** is the **interconnected routers** that forward packets;
* **Packet Switching** is the transmission technology that divides messages into small **packets** that are transmitted independently over the network;
  * **Store-and-Forward** is the packet-switching technique that stores the entire packet in the router's memory before forwarding it;
  * **Queueing Delay** is the delay that occurs when packets are stored in a router's memory, in a queue, before being forwarded - when **arival rate > transmission rate**;
    * **Packet Loss** occurs when the queue is full and the router drops packets;
    * **Packet delay** `d` is the sum of the **transmission delay** `d_trans`, **propagation delay** `d_prop`, **queueing delay** `d_queue` and **processing delay** `d_proc`: `d = d_proc + d_queue + d_trans + d_prop`;
* There are two key network-core functions:
  * **Routing** is the process of determining the best path for a packet to take from the source to the destination;
  * **Forwarding** is the process of moving a packet from the router's input port to the appropriate output port;
* **Circuit Switching** is the transmission technology that establishes a dedicated communication path between two devices before the transmission of data;
  * **Time Division Multiplexing (TDM)** is the circuit-switching technique that divides the communication path into time slots;
  * **Frequency Division Multiplexing (FDM)** is the circuit-switching technique that divides the communication path into frequency bands;
  * **Packet Switching is more efficient** than circuit switching because it does not require the establishment of a dedicated communication path.

---

## Protocol Layers

* **Protocol Layers** are the **abstractions** that allow the **separation** of **concerns** in the design of a network;
  * **Each layer** provides a **service** to the **layer above** it;
  * **Each layer** uses the **services** provided by the **layer below** it;
  * **Each layer** communicates with the **corresponding layer** on the **other end** of the communication link;
* The **Internet Protocol Stack** is the set of protocols used in the Internet - also known as the **TCP/IP Protocol Stack**:
  * **Application Layer** is the top layer that provides services to applications - e.g., HTTP, SMTP, FTP;
  * **Transport Layer** is the layer that provides end-to-end communication services - e.g., TCP, UDP;
  * **Network Layer** is the layer that provides routing services - e.g., IP;
  * **Link Layer** is the layer that provides data-link services - e.g., Ethernet, 802.11;
  * **Physical Layer** is the bottom layer that provides physical services;
* The **OSI Model** is the model that defines seven layers of protocols, adding the **Presentation Layer** and the **Session Layer** to the Internet Protocol Stack - this layers are in the **Application Layer** of the Internet Protocol Stack.

<p align="center">
<img src="https://www.researchgate.net/publication/327483011/figure/fig2/AS:668030367436802@1536282259885/The-logical-mapping-between-OSI-basic-reference-model-and-the-TCP-IP-stack.jpg" alt="Protocol Layers" width="600">
</p>

* **Encapsulation** is the process of adding headers and trailers to the data at each layer of the protocol stack;
  * **Data** is the information that is transmitted over the network;
  * **Header** is the information that is added to the data at each layer of the protocol stack;
  * **Trailer** is the information that is added to the data at each layer of the protocol stack;
  * **Packet** is the data, header, and trailer at each layer of the protocol stack.

> **[Wireshark](https://www.wireshark.org/)** is a network protocol analyzer that captures and displays the packets traveling through a network.
