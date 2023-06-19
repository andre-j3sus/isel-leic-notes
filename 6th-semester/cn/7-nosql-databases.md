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
  * Limitation of the relational model - it is not possible to store objects (aggregated data) in a relational database;
  * **Object-relational mapping (ORM)** - a technique to map objects to relational databases.

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
* **Schemaless** - there is no rigid schema, allowing to store different types of data in the same collection;
* **Polyglot persistence** - different types of data can be stored in different types of databases - e.g. relational, document, graph, etc.

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
* Documents in the same collection can have different fields - schemaless;
* A document can reference other **collections** - until **100 levels of nesting**;
* Documents should be small, because they are replicated across the cluster - more than **1 MiB** is not recommended;
* Documents are identified by **IDs** - they can be generated automatically, or manually by the user.

---
---

## Java API

```java	
public class FirestoreClient {
  public static void main(String[] args) {
        FirestoreOptions options = FirestoreOptions.getDefaultInstance().getService();
        Firestore db = options.getService();
      
        // Get collection
        CollectionReference collection = db.collection("users");

        // List documents
        Iterable<DocumentReference> documents = collection.listDocuments();
        for (DocumentReference document : documents) {
            ApiFuture<DocumentSnapshot> future = document.get();
            DocumentSnapshot documentSnapshot = future.get();
            if (documentSnapshot.exists()) {
                System.out.println("Document data: " + documentSnapshot.getData());
            } else {
                System.out.println("No such document!");
            }
        }

        // Get document
        DocumentReference document = collection.document("user1"); // user1 is the ID of the document

        // Get document data
        ApiFuture<DocumentSnapshot> future = document.get();
        DocumentSnapshot documentSnapshot = future.get();
        if (documentSnapshot.exists()) {
            System.out.println("Document data: " + documentSnapshot.getData());
        } else {
            System.out.println("No such document!");
        }

        // Add document
        Map<String, Object> data = new HashMap<>();
        data.put("name", "John");
        data.put("age", 30);
        ApiFuture<WriteResult> result = document.set(data);
        System.out.println("Update time: " + result.get().getUpdateTime());

        // Update document
        ApiFuture<WriteResult> update = document.update("age", 40);
        System.out.println("Update time: " + update.get().getUpdateTime());

        // Delete document
        ApiFuture<WriteResult> delete = document.delete();
        System.out.println("Update time: " + delete.get().getUpdateTime());

        // Add document with ID
        DocumentReference document2 = collection.document("user2");
        Map<String, Object> data2 = new HashMap<>();
        data2.put("name", "Mary");
        data2.put("age", 25);
        ApiFuture<WriteResult> result2 = document2.set(data2);
        System.out.println("Update time: " + result2.get().getUpdateTime());

        // Add document with auto-generated ID
        Map<String, Object> data3 = new HashMap<>();
        data3.put("name", "Peter");
        data3.put("age", 35);
        ApiFuture<DocumentReference> addedDocRef = collection.add(data3);
        System.out.println("Added document with ID: " + addedDocRef.get().getId());

        // Read field from document
        ApiFuture<DocumentSnapshot> future2 = document.get();
        DocumentSnapshot documentSnapshot2 = future2.get();
        if (documentSnapshot2.exists()) {
            System.out.println("Document data: " + documentSnapshot2.getData());
            System.out.println("Name: " + documentSnapshot2.getString("name"));
            System.out.println("Age: " + documentSnapshot2.getLong("age"));
        } else {
            System.out.println("No such document!");
        }
        // or
        documentSnapshot2.toObject(User.class);

        // Delete field from document
        Map<String, Object> updates = new HashMap<>();
        updates.put("age", FieldValue.delete());
        ApiFuture<WriteResult> writeResult = document.update(updates);
        System.out.println("Update time: " + writeResult.get().getUpdateTime());

        // Simple query
        Query query = collection.whereEqualTo("age", 30); // whereLessThan, whereLessThanOrEqualTo, whereGreaterThan, whereGreaterThanOrEqualTo, whereArrayContains, whereArrayContainsAny, whereIn, whereNotIn
        ApiFuture<QuerySnapshot> querySnapshot = query.get();
        List<QueryDocumentSnapshot> documents2 = querySnapshot.get().getDocuments();

        // Simple query of complex field (nested)
        FieldPath fieldPath = FieldPath.of("address", "city"); // address.city
        Query query2 = collection.whereEqualTo(fieldPath, "New York");
        
        // Complex query
        Query query3 = collection.whereEqualTo("age", 30).whereEqualTo("name", "John");
    }
}
```

> In order to use complex queries (more than one field/condition), it is necessary to create an index in the Firestore console.
>
> **Indexing** refers to the process of creating additional data structures that enable efficient data retrieval. Essentially, it's a way to assist the database in quickly locating the data you require without having to scan the entire database.

## Limitations

* It is not possible to use equality operators (`whereEqualTo`, `whereLessThan`, etc) on multiple fields in the same query;
* Read for more limitations [here](https://firebase.google.com/docs/firestore/query-data/queries#limitations).