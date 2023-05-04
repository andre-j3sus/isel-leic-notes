# Pub/Sub

There are many ways to implement a distributed system. One of them is the **publish/subscribe** model.

Other models are:

* **Client/Server**;
  * Requests/Reply;
  * Most common model;
  * Limited to 1:1 communication;
  * Both participants must be online at the same time;
  * **Pull-based synchronous communication**;
* **RPC** over full-duplex TCP/IP;
  * Supports streaming and asynchronous communication;
* **Message Queues**.

### Event-Driven Architecture (Messages)

* **Loosely coupled** between producers and consumers;
* Different rates of production and consumption - asynchronous;
  * Messages typically stored in a **queue**;
* Producers send messages to **queues** or **topics**;
* A consumer or a group of consumers **subscribe** to a queue or topic, to receive messages;
* **Disadvantage:** requires a middleware called **message broker** or **mediator** (e.g. RabbitMQ, Kafka, ActiveMQ, etc.).

<p align="center">
    <img src="docs/message-queues.png" alt="Message Queues"/>
</p>

* Each client sends the name of its own **response queue** to the server in the request message;
* Multiple servers share a **single global request queue**, allowing them to **balance the load**.

---

## Publish/Subscribe Model

* An intermediary called **message broker** or **mediator** keeps track of the **topics** and **subscribers**;
* Each subscriber **subscribes** to one or more topics;

### Examples of Message Systems

* Java Message System (JMS);
* Microsoft Message Queue (MSMQ);
* Advanced Message Queuing Protocol (AMQP) - open standard;
* Apache Kafka;
* ZeroMQ - asynchronous messaging framework with low latency;
* Cloud Amazon Simple Queue Service (SQS);
* Azure Queue Storage;
* Google Pub/Sub.

---
---

## Google Pub/Sub

> Google Cloud Pub/Sub is a fully-managed real-time messaging service that allows you to send and receive messages between independent applications. You can leverage Pub/Sub’s flexibility to decouple systems and components hosted on Google Cloud or elsewhere on the Internet.

### Message Flow

The message flow in Google Pub/Sub is as follows:

1. The producer chooses a **topic** which will be the destination of the message;
2. The producer sends (**publishes**) the message to the topic;
3. The infrastructure receives the message, assigns an unique **ID** in the topic and returns it to the producer, as confirmation of the message being published;

<p align="center">
    <img src="docs/pubsub-publish.png" alt="PubSub Publish"/>
</p>

4. A topic can have one or more **subscriptions**; each message published in a topic is replicated to all queues subscribed to that topic;

<p align="center">
    <img src="docs/pubsub-subscription.png" alt="PubSub Subscription"/>
</p>

1. The messages can be delivered to the subscribers in two ways:
   * **Pull** - the subscriber **pulls** the messages from the topic;
   * **Push** - the messages are **pushed** to the subscriber.

<p align="center">
    <img src="docs/pubsub-push-pull.png" alt="PubSub Pull and Push"/>
</p>

6. The subscriber receives the message and sends an **acknowledgement** to the infrastructure;
   * The acknowledgement needs to be sent within a **deadline** defined in the subscription;
   * If the deadline is exceeded, the message is sent again to the subscriber; this way, the message is guaranteed to be delivered at least once.

<!--Example of topics and subscriptions-->

---

### Multiple Subscriptions and Consumers

<p align="center">
    <img src="docs/pubsub.png" alt="PubSub"/>
</p>

---

### Patterns

* **Fan-out pattern** - the messages are replicated to all subscribers;
* **Work queue pattern** - work is distributed among multiple workers;

<p align="center">
    <img src="docs/pubsub-patterns.png" alt="Patterns"/>
</p>

---

### Advantages

* **Decoupling** between producers and consumers;
* Different rates of production and consumption - asynchronous;
* One or more consumers can subscribe to a topic;

### Disadvantages

* **Reliability** - the messages are not guaranteed to be delivered for the publishers;
* **Potencial bottleneck** - the message broker can become a bottleneck if the number of messages is too high;
* **Security** - the messages are not encrypted by default.
