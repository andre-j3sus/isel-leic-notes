# Minimax Principle

> The minimax principle is a decision rule used in decision theory, game theory, statistics, and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario. When dealing with gains, it is referred to as "maximin"—to maximize the minimum gain. The principle is also known as the principle of pessimism, the principle of prudence, and the principle of maximum entropy.

## Two-Player Zero-Sum Games

> The games most commonly studied within AI are what game theorists call deterministic, two-player, turn-taking, perfect information, zero-sum games.

* **Deterministic** - the outcome of a game is determined by the actions of the players;
* **Perfect information** - each player knows the complete state of the game at any point in time;
* **Zero-sum** - the total payoff of all players is zero, meaning that whats good for one player is bad for the other.

During this chapter:

* We will call the two players **MAX** and **MIN**;
* MAX moves first, and then MIN moves, and so on until the game is over;
* At the end of the game, points are awarded to the winner and penalties are awarded to the loser.

A game can be formally defined with the following elements:

* `S0` - the initial state of the game;	
* `TO-MOVE(s)` - the player who has the move in state `s`;
* `ACTIONS(s)` - the set of legal moves in state `s`;
* `RESULT(s, a)` - the state that results from doing move `a` in state `s`;
* `IS-TERMINAL(s)` - a predicate that is true if `s` is a terminal state;
* `UTILITY(s, p)` - the utility of state `s` to player `p`; defines the payoff for player `p` in state `s`.

---

## Minimax Tree

> A minimax tree is a tree that represents all possible outcomes of a game, assuming that both players play optimally.

* The root of the tree is the initial state of the game;
* The MAX player is represented by the **maximizing nodes**;
* The MIN player is represented by the **minimizing nodes**;

In the image bellow, we can see that the MAX player always chooses the maximum value, and the MIN player always chooses the minimum value:


<p align="center">
    <img src="https://www.massey.ac.nz/~mjjohnso/notes/59302/fig05.02.gif" width="400" alt="Minimax Tree"/>
</p>

In this example:

* The MAX chooses the A1 node, because it has the maximum value;
* Then, the MIN chooses the A11 node, because it has the minimum value;
* ...

---

## Minimax Value

> The minimax value is the utility of being in that state, assuming that both players play optimally.

```
MINIMAX(s) = 
    if IS-TERMINAL(s) then
        return UTILITY(s, p)
    else if TO-MOVE(s) = MAX then
        return MAX(MINIMAX(RESULT(s, a)))
    else if TO-MOVE(s) = MIN then
        return MIN(MINIMAX(RESULT(s, a)))
```

---

## Alpha-Beta Pruning

> Alpha-beta pruning is a search algorithm that seeks to decrease the number of nodes that are evaluated by the minimax algorithm in its search tree. It is an adversarial search algorithm used commonly for machine playing of two-player games (Tic-tac-toe, Chess, Go, etc.).

<!--TODO: Add diagram-->