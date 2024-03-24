# Transport Layer

* **Transport Layer** - responsible for the end-to-end communication between **processes** - unlike the network layer, which is responsible for the end-to-end communication between **hosts**;
* Provides **logical communication** between processes running on different hosts;
* **Sender** - breaks the message into **segments** and passes them to the network layer;
* **Receiver** - reassembles the segments into the message and passes it to the application layer;
* The two most common transport layer protocols are **TCP** and **UDP**.

---

## Multiplexing and Demultiplexing

* **Multiplexing** - the process of combining multiple data streams into a single data stream;
  * At the **sender**, handles data from multiple sockets, adds **header** information to each segment, and passes the segments to the network layer;
* **Demultiplexing** - the process of splitting a single data stream into multiple data streams;
  * At the **receiver**, the transport layer uses the **header** information to deliver the segments to the correct socket;
  * **Connectionless demultiplexing** - the transport layer uses the **destination port number** to deliver the segments to the correct socket - used by **UDP**;
  * **Connection-oriented demultiplexing** - the transport layer uses the **connection identifier** to deliver the segments to the correct socket - used by **TCP** - **source and destination port numbers and IP addresses** are used to identify the connection.

---

## User Datagram Protocol (UDP)

* **User Datagram Protocol (UDP)** - a **connectionless** transport layer protocol that provides **unreliable** and **unsequenced** data delivery;
* **Best-effort delivery** - UDP **does not guarantee that the data will be delivered**, **nor does it guarantee the order** of delivery;~~
* Used at streaming applications, DNS and SNMP;
* **Pros**: simple, low overhead, no connection establishment, no connection state, no congestion control (**blast**), small header;
* **UDP Header**:
  * **Source Port** - 16 bits - identifies the sending port;
  * **Destination Port** - 16 bits - identifies the receiving port;
  * **Length** - 16 bits - length of the UDP header and data;
  * **Checksum** - 16 bits - used for error-checking the header and data;
    * **Sender** calculates the checksum and includes it in the header - calculated using a **sum** of the **header** and **data**;
    * **Receiver** calculates the checksum and compares it with the one in the header - if they match, **no errors** are detected.

---

## Reliable Data Transfer

* **Reliable Data Transfer** - the process of ensuring that data is delivered **error-free**, **in-order**, and **without loss**;
* **RDT 1.0** - consider the network **error-free** and **no packet loss**;
  * Sender sends the data and receiver reads it;
* **RDT 2.0** - underlying channel with **bit errors**;
  * **Checksum** used to **detect errors**;
  * **Acknowledgments (ACKs)** used to **confirm** the data was received and was **error-free**;
  * **Negative Acknowledgments (NAKs)** used to **request retransmission** of the data;
  * **Stop-and-Wait** - sender sends one packet and waits for the acknowledgment before sending the next packet;
  * **Sequence Numbers** - used to **order** the packets, and **detect duplicates**;
* **RDT 2.1** - **NAKs** are not used;
  * Instead, the receiver sends an **ACK** for the last correctly received packet;
* **RDT 3.0** - underlying channel with **bit errors** and **packet loss**;
  * **Timeouts** - used to detect packet loss;

### Pipelined Protocols

* **Pipelined Protocols** - allow the sender to have multiple packets in transit at the same time, without waiting for an acknowledgment for each packet;
* **Go-Back-N** - sender can have up to **N** unacknowledged packets in transit;
  * **Sender** - sends up to **N** packets without waiting for an acknowledgment;
  * **Receiver** - sends **cumulative ACK** for the last correctly received packet;
  * **Sender** - retransmits all unacknowledged packets after a **timeout**;
* **Selective Repeat** - sender can have up to **N** unacknowledged packets in transit;
  * **Sender** - sends up to **N** packets without waiting for an acknowledgment;
  * **Receiver** - sends **ACK** for each correctly received packet;
  * **Sender** - retransmits only the unacknowledged packets after a **timeout**.

| Protocol         | Min Seq Numbers |
| ---------------- | --------------- |
| Stop-and-Wait    | 2               |
| Go-Back-N        | N + 1           |
| Selective Repeat | 2N              |

---

## Transmission Control Protocol (TCP)

* **Transmission Control Protocol (TCP)** - a **connection-oriented** transport layer protocol that provides **reliable** and **sequenced** data delivery;
* **Connection-oriented** - **connection establishment** and **termination**;
* **Reliable** - **error detection**, **retransmission**, **acknowledgments**, **flow control**, and **congestion control**;
* **Full-duplex** - data can be sent in both directions at the same time;
* **Point-to-point** - data is sent from one sender to one receiver;
* The structure of the TCP header is more complex than the UDP header:
  * **Source Port** - 16 bits - identifies the sending port;
  * **Destination Port** - 16 bits - identifies the receiving port;
  * **Sequence Number** - 32 bits - used to order the packets;
  * **Acknowledgment Number** - 32 bits - used to acknowledge the received packets;
  * **Data Offset** - 4 bits - length of the TCP header;
  * **Reserved** - 6 bits - reserved for future use;
  * **Flags** - 6 bits - used to control the connection - **SYN**, **ACK**, **FIN**, **RST**, **PSH**, **URG**;
  * **Window Size** - 16 bits - used for flow control;
  * **Checksum** - 16 bits - used for error-checking the header and data;
  * **Urgent Pointer** - 16 bits - used to indicate the urgent data;
  * **Options** - variable length - used for additional features.

### Three-Way Handshake

* Used to **establish a connection** between the sender and receiver;
* Better than a two-way handshake because it prevents **old** or **duplicate** connections;
  * **Sender** sends a **SYN** packet to the **receiver**;
  * **Receiver** sends a **SYN-ACK** packet to the **sender**;
  * **Sender** sends an **ACK** packet to the **receiver**;
* To **terminate** the connection, a **four-way handshake** is used:
  * **Sender** sends a **FIN** packet to the **receiver**;
  * **Receiver** sends an **ACK** packet to the **sender**;
  * **Receiver** sends a **FIN** packet to the **sender**;
  * **Sender** sends an **ACK** packet to the **receiver**.