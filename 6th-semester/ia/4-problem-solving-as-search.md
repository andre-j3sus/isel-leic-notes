# Problem Solving as Search

> Problem solving is a process of finding a path from an initial state to a goal state, where the path is a sequence of actions that leads from the initial state to the goal state.

## State Space

> State space is a scheme for representing problems. A state space is a **graph** whose nodes correspond to **problem situations**, and a given problem is reduced to **finding a path** through the graph from the initial state to a goal state. Possible moves are represented by **edges**, that lead to the next state.

<p align="center">
  <img src="docs/state-space-graph.png" width="300" alt="State Space"/>
</p>

* Problem solving involves graph searching and exploring alternatives;
* The basic strategies for solving problems are:
    * **Depth-first search**;
    * **Breadth-first search**;
    * **Iterative deepening**;

In summary:

* State space of a given problem specifies the *rules of the game*;
* **Nodes** correspond to **situations**;
* **Arcs** correspond to **legal moves/actions**;
* A particular problem is defined by:
  * A state space;
  * A start node;
  * A goal condition - a set of **goal nodes**.

### Implementation

* The state space is represented by a relation `s(X, Y)` which is true if there is a legal move in the state space from a node `X` to a node `Y`;
  * `Y` is the **successor** of `X`;
  * If there are costs associated with the moves, then the relation `s(X, Y, Cost)` is used, where `Cost` is the cost of the move;
* Relation `s` can be represented in the program explicitly by a set of facts, but this would be impractical for large state spaces;
* Therefore, the sucessor relation is represented implicitly by a set of **generator rules**;
* The representation of the nodes should be **compact**, but it should also enable efficient execution of operations required.

### Complexities of the basic search techniques

| Search technique     | Time complexity    | Space complexity   | Shortest solution? |
| -------------------- | ------------------ | ------------------ | ------------------ |
| Breadth-first search | O(b<sup>d</sup>)   | O(b<sup>d</sup>)   | Yes                |
| Depth-first search   | O(b<sup>m</sup>)   | O(bm)              | No                 |
| Iterative deepening  | O(b<sup>d</sup>)   | O(bd)              | Yes                |
| Bidirectional search | O(b<sup>d/2</sup>) | O(b<sup>d/2</sup>) | Yes                |

* `b` is the branching factor;
* `d` is the depth of the shallowest solution;
* `m` is the maximum depth of the state space.
