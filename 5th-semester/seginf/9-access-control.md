# Access Control

> Access control (authorization) is the process of r**estricting access to a resource** based on the identity of the user. It is a fundamental concept in computer security.

Motivations:

* **Confidentiality**: Only authorized users should be able to access the data;
* **Integrity**: Only authorized users should be able to modify the data.

---

## Base Architecture

* **Subject**: A user or a process that wants to access an object;
* **Object**: A resource that the user wants to access;
* **PEP** - **Policy Enforcement Point**: It is the component that enforces the access control **policy**;
  * Should not be changed;
  * It must not be bypassed;
  * It must be small and confined to the security system core;
* **PDP** - **Policy Decision Point**: It is the component that decides whether the access should be granted or not;


<p align="center">
    <img src="./docs/seginf-diagrams-AccessControl.svg" alt="AccessControl" align="center"/>
</p>

> **Policy** is a set of rules that define the access control.

> **Security Model** is the formalization os the **form of application** of the security policies.

> **Security Mechanisms** are low-level components that implement the security model.

* The **PEP** depends on the security mechanisms;
* The **PDP** depends on the security model.

---

## Policies Types

* **Discretionary Access Control (DAC)**: The access control is based on the **subject** and what it is allowed (or not) to do; generally, the rules are defined by the **owner** of the resource;
* **Mandatory Access Control (MAC)**: Similar to DAC, but the rules are defined by a **central authority**;
* **Role-Based Access Control (RBAC)**: The access control is based on the **role** of the subject in the system and the **rules that are defined for that role**; check the [RBAC](./10-rbac.md) section for more details.

---

## Access Control Matrix

> Defines the triplet **(Subject, Object, Operation)**, where the lines represent the subjects, the columns represent the objects and the cells represent the operations. Each cell represents the subject's permission to perform the operation on the object.

|       |   File1    |  File2  |  File3  |
| :---: | :--------: | :-----: | :-----: |
| Alice | Read/Write |  Read   | Execute |
|  Bob  |    Read    |  Read   |         |
| Carol |            | Execute |         |

There are three possible implementations of the access control matrix:

### Authorization Matrix

| Subject | Permission | Object |
| :-----: | :--------: | :----: |
|  Alice  |    Read    | File1  |
|  Alice  |   Write    | File1  |
|  Alice  |    Read    | File2  |
|  Alice  |  Execute   | File3  |
|   Bob   |    Read    | File1  |
|   Bob   |    Read    | File2  |
|  Carol  |  Execute   | File2  |

### Capability Matrix

> Each subject has a set of capabilities, each capability is a tuple **(Object, Operation)**;
  * Advantages:
    * Easier to obtain the permissions of a subject;
    * In distributed systems, there is no need of multiple authentications;
  * Disadvantages:
    * It is necessary to search for the capabilities in the subject's set;
    * Can be copied and used by attackers;

| Subject |                  Capability                  |
| :-----: | :------------------------------------------: |
|  Alice  | File1:read, write; File2:read; File3:execute |
|   Bob   |            File1:read; File2:read            |
|  Carol  |                File2:execute                 |

### Access Control List (ACL)

> Each object has a list of subjects that are allowed to perform the operations on it;
  * Advantages:
    * Easier to obtain the permissions of an object;
    * If the object is deleted, the permissions are also deleted;
  * Disadvantages:
    * To know all the permissions of a subject, it is necessary to search in all the objects;

| Object |                 ACL                 |
| :----: | :---------------------------------: |
| File1  |     Alice:read, write; Bob:read     |
| File2  | Alice:read; Bob:read; Carol:execute |
| File3  |            Alice:execute            |

---

## Group-Based Access Control

> It is a type of access control that uses groups of subjects to define the permissions.

* Groups are an intermediate layer in the access control;
* Permissions can be defined for **groups** and for **individual subjects**;
* Access control is based on the **membership** of the subject in the group;
* It is possible to define **negative permissions** to an individual subject in a group (e.g. a subject can be a member of a group, but not be allowed to perform a specific operation on a specific object that the group is allowed to do).

### Example with Windows ACL

* After logging in, it is granted an **access token** that contains the **user's SID (Security Identifier)**;
* After an object is created, a **security descriptor** is associated with it, containing:
  * The **owner SID**;
  * The **DACL**;
  * The **SACL** (System Access Control List), with the **audit policies**;
* A **ACE (Access Control Entry)** is a triplet **(SID, Allow/Deny, Operation)**.
