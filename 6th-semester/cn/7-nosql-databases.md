# NoSQL Databases

> In this chapter, we will talk about clusters, sharding, replication and NoSQL databases (especially Google Firestore).

---

## Relational Model

* **Persistence** - capacity to persist large amounts of data, which is infeasible to fit in memory;
* **Concurrency** - capacity to handle multiple clients at the same time;
* **Transactions** - capacity to ensure that the database is always in a consistent state, even in the presence of failures;
* **Integration** - different technologies can access the database;
* **Standards** - SQL is a standard language for relational databases;
* **Impedance Mismatch** - the difference between the relational model and the object-oriented model;
  * **Object-relational mapping** - a technique to map objects to relational databases.

---

## Clustering

* Clusters allow to scale the database horizontally (**scale-out**);
* In a **scale-up** approach, the database is scaled vertically, by adding more resources to the same machine - this requires a lot of resources;
* In the other hand, in a **scale-out** approach, the database is scaled horizontally, by adding more machines to the cluster - this is more cost-effective;

> **Problem**: the relational model is not designed to work in a distributed environment - companies like Google and Amazon created their own solutions to this problem.

### Vantages of Clustering

* **High Scalability** - the database can be scaled horizontally, by adding more machines to the cluster;
* **Reduced Cost** - the database can be scaled horizontally, which is more cost-effective than scaling vertically;
* **Flexibility** - data does not need to be stored using a schema, like in the relational model, allowing flexible formats - key-value, document, column-oriented, graph, etc;
* **Availability** - the database can be replicated, allowing to handle failures.

> **Note**: the CAP theorem also applies to distributed databases - impossible to have all three properties at the same time - consistency, availability and partition tolerance.

---

## Distributed Databases

* **Sharding** - the database is split into multiple shards, which are distributed across the cluster; in the relational model, this can be done in two ways:
  * **Vertical** - each shard contains a subset of the columns;
  * **Horizontal** - each shard contains a subset of the rows;
* **Replication** - each shard is replicated across multiple machines, to handle failures; this can be done in the following ways:
  * **Master-slave** - one machine is the master, and the others are slaves; the master is responsible for writing, and the slaves are responsible for reading;
  * **Peer-to-peer** - all machines are equal, and can read and write;
  * Master-slave reduce the number of conflicts, but peer-to-peer is more scalable, because reduce the write overhead in the master;

Some systems use a combination of sharding and replication.

---

## NoSQL Databases

> A NoSQL database is a **schema-less** database that is not based on the relational model - data is stored in **collections**.

* Does not use the relational model;
* Supports **horizontal scaling**, using clusters;
* Multiple open-source implementations;
* **Schema-less**;
* **Polyglot persistence** - different types of data can be stored in different types of databases.

### BASE Properties

* **Basically Available** - the database is always available, even if it is not consistent;
* **Soft state** - the database is not always consistent;
* **Eventual consistency** - the database will eventually be consistent.

### Aggregate Data Models

NoSQl databases support aggregate data models, which can be classified in the following categories:

* **Key-value** - data is stored as key-value pairs; e.g. [Redis](https://redis.io/);
* **Document** - data is stored as documents, which are similar to JSON objects; e.g. [MongoDB](https://www.mongodb.com/);
* **Column-family** - data is stored in columns; e.g. [Cassandra](https://cassandra.apache.org/);
* **Graph** - data is stored as a graph, where nodes and edges represent entities and relationships, respectively; e.g. [Neo4j](https://neo4j.com/product/neo4j-graph-database/).

---

## Google Firestore

> Firestore is a NoSQL database, which is part of the Google Cloud Platform.

* The database is a set of **collections**;
* Collections contain **documents**, which are aggregates of **fields** and **values** (with various types - string, number, boolean, timestamp, reference, geo-point, array, map, etc) - similar to JSON objects;
* A document can reference other collections and documents;
* Documents should be small, because they are replicated across the cluster - more than 1 MiB is not recommended.