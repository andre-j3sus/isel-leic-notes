# Network Layer

* **Network Layer** - responsible for the end-to-end communication between **hosts** - unlike the transport layer, which is responsible for the end-to-end communication between **processes**;
* Sender: **encapsulates** the **transport layer segment** into a **datagram**;
* Receiver: **decapsulates** the **datagram** into the **transport layer segment**;
* There are two key functions in the network layer:
  * **Forwarding** - move packets from the router's input to the appropriate router output;
  * **Routing** - determine the route taken by packets from the source to the destination;
* **Data Plane** - determines how packets are forwarded through the network;
  * **Forwarding Table** - maps destination addresses to output ports;
  * **Switching** - determines how packets are forwarded from input to output ports;
* **Control Plane** - determines how to build the forwarding table;
  * **Routing Protocols** - determine the best path to a destination;
  * **Routing Algorithms** - determine the best path to a destination;
* **Longest Prefix Matching** - the router uses the most specific prefix that matches the destination address.

---

## IP - Internet Protocol

* **IP** - the network layer protocol for the Internet;
* **IP Datagram** - the unit of data exchanged between the network layer entities;
  * **Header** - contains control information;
    * **Version** - the IP version - 4 bits;
    * **Header Length** - the length of the header - 4 bits;
    * **Type of Service** - the quality of service - 8 bits;
    * **Total Length** - the length of the datagram - 16 bits;
    * **Identification** - the identification of the datagram - 16 bits;
    * **Flags** - control fragmentation - 3 bits;
    * **Fragment Offset** - the position of the fragment - 13 bits;
    * **Time to Live** - the maximum number of hops - 8 bits;
    * **Protocol** - the transport layer protocol - 8 bits;
    * **Header Checksum** - the header checksum - 16 bits;
    * **Source Address** - the source IP address - 32 bits;
    * **Destination Address** - the destination IP address - 32 bits;
    * **Options** - additional information - variable length;
  * **Payload** - contains the data;

### IP Addressing

* An **address** is an identifier for a network interface;
* **IPv4** - 32-bit addresses;
* **IPv6** - 128-bit addresses - created to solve the address exhaustion problem;
  * Fragmentation is not allowed in IPv6;
* **CIDR** - Classless Inter-Domain Routing is a subnet addressing scheme: `a.b.c.d/n`;
  * **Address** - the IP address in format `a.b.c.d`;
  * **Prefix Length** - the number of bits in the prefix in format `/n`;
* **Subnet** is a range of IP addresses;
* There are also **special addresses**:
  * `0.0.0.0/8` - the default route;
  * `127.0.0.0/8` - the loopback address;
  * `100.64.0.0/10` - the shared address space;
  * ...
* **DHCP** - Dynamic Host Configuration Protocol is used to assign IP addresses - from **application layer**; 
  * **DHCP Server** - assigns IP addresses to clients;
  * **DHCP Client** - requests an IP address from the server;
  * Client broadcasts a **DHCP Discover** message;
  * Server responds with a **DHCP Offer** message;
  * Client requests the IP address with a **DHCP Request** message;
  * Server acknowledges the request with a **DHCP Ack** message;

### NAT - Network Address Translation

* **NAT** - Network Address Translation is used to map private addresses to public addresses;
  * **Private Addresses** - addresses that are not routable on the Internet;
  * **Public Addresses** - addresses that are routable on the Internet;
* **NAT Router** - translates the private addresses to public addresses;
  * **Static NAT** - maps a private address to a public address;
  * **Dynamic NAT** - maps a private address to a public address from a pool;
  * **PAT** - Port Address Translation maps a private address to a public address and port;

---

## ICMP - Internet Control Message Protocol

* **ICMP** - Internet Control Message Protocol is used to send error messages and operational information;
* **ICMP Message** - contains the **Type** and **Code** fields;
  * **Type** - the type of the message;
  * **Code** - the code of the message;
* **ICMP Echo Request** - used to test the reachability of a host;
* **ICMP Echo Reply** - used to respond to an echo request;
* **ICMP Destination Unreachable** - used to inform that the destination is unreachable;
* **ICMP Time Exceeded** - used to inform that the time to live has expired;
* **ICMP Redirect** - used to inform that a better route is available;
* **ICMP Source Quench** - used to inform that the router is congested;
* ...

