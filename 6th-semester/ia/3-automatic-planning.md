# Planing

> Planing is the process of thinking about the actions required to achieve a desired goal.

* **Plan** is a sequence of actions that leads to a goal.
  * Totally ordered (for simplicity at start).
  * A plan may also be **partially ordered**.

### Problem of planing

* Given:
  * A set of possible actions;
  * Start state;
  * Goals to be achieved;
* Find:
  * A plan to achieve the goals.

### Means-Ends Analysis

> Means-Ends Analysis is a problem solving technique that finds the difference between the current state and the goal state, and then finds an action that reduces that difference.

* **Ends** are the **goals** to be achieved;
* **Means** are the **actions** that can be performed;

---

## Classical Planning

* The world is completely **observable**;
* Actions effects are **deterministic**;
* Any changes in the world only occur as a result of an action;
* Actions are **instantaneous** (no duration) - time is only reflected in the order of actions.

### Representation - STRIPS

> STRIPS (Stanford Research Institute Problem Solver) is a language for describing the state of a problem and the actions that can be performed.

* **State** is represented by a set of **predicates**;
  * **Predicates** are **propositions** that can be true or false, e.g. `at(A, B)` (agent `A` is at location `B`).
* **Actions** are represented by:
  * **Preconditions** - predicates that must be true for the action to be performed;
  * **Effects** - predicates that become true after the action is performed:
    * **Add** - predicates that become true;
    * **Delete** - predicates that become false.
  * **Action** is **applicable** if all preconditions are true. 
  
### Example

Three blocks `A`, `B` and `C` are on a table. The goal is to stack `A` on `B` on `C`.

**State**:
  * `on(A, table)`;
  * `on(B, table)`;
  * `on(C, table)`;
  * `clear(A)`;
  * `clear(B)`;
  * `clear(C)`.

**Goal**:
  * `on(A, B)`;
  * `on(B, C)`.
  
**Actions**:
  * `move(X, Y, Z)`:
    * Preconditions:
      * `clear(X)`;
      * `clear(Z)`;
      * `on(X, Y)`;
    * Effects:
      * Add: `on(X, Z)`;
      * Delete: `on(X, Y)`, `clear(Z)`.

**Plan**:
  * `move(A, table, B)`;
  * `move(B, table, C)`.

---

## Problem with Completeness

* **Completeness** - if there is a solution, the algorithm will find it.

The problem with completeness is **locality** (a.k.a. **linearity**) - the planner keeps working myopically on just one goal, without considering the global picture. This can lead to **dead ends**.

The solution is to use **goal regression** - the planner works backwards from the goal, trying to find a sequence of actions that will achieve it. This ensures that the planner will consider the global picture - **global planning**.