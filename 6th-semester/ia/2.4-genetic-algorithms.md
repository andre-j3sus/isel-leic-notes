# Genetic Algorithms

> A genetic algorithm (or GA) is a search technique used in computing to find **true or approximate solutions** to optimization and search problems.

* GAs are categorized as **global search** heuristics;
* They use **techniques inspired by evolutionary biology** such as inheritance, mutation, selection, and crossover (also called recombination);
* The evolution usually starts from a **population of randomly generated individuals** and happens in **generations**;
* In each generation, the fitness of every individual in the population is evaluated; the fitness is usually the value of the objective function in the optimization problem being solved;
* Multiple **individuals** are **selected** from the current population to **breed** a new generation;
* The algorithm terminates when either a **maximum number of generations** has been produced, or a **satisfactory fitness level** has been reached for the population.

---

## Vocabulary

* **Individual** - a single solution to the problem we are trying to solve;
* **Population** - a collection of individuals;
* **Generation** - a single iteration of the algorithm;
* **Fitness** - a function that tells us how good each individual is;
* **Trait** - a characteristic of an individual;
* **Genome** - a collection of traits that define an individual;
* **Crossover** - a process of taking two individuals and producing a new individual from them;
**Offspring** - a new individual produced by crossover;
* **Mutation** - a process of randomly changing an individual.

---

## GA Operators

### Common Representation Methods

* **Binary representation** - each individual is represented as a string of bits;
* **Array of integers** - each individual is represented as an array of integers;
* **Array of letters** - each individual is represented as an array of letters.

### Methods of Selection

* **Roulette wheel selection** - each individual is assigned a slice of the wheel proportional to its fitness; individuals with higher fitness have a higher chance of being selected (larger slice);
* **Elitist selection** - the best individuals are selected to be parents;
* **Cutoff selection** - only individuals with a fitness above a certain threshold are selected;
* **Fitness proportionate selection** - each individual has a probability of being selected proportional to its fitness;
* **Scaling selection** - the fitness of each individual is scaled to a value between 0 and 1;
* **Rank selection** - each individual is assigned a rank based on its fitness.

### Methods of Reproduction

* **Crossover** - two individuals are selected and a two new individuals are created by combining their genomes - the new individuals are called **offspring**;
  * There are many ways to perform crossover:
    * Randomly select a single point for crossover;
    * Multiple points for crossover;
    * Uniform crossover.
* **Mutation** - a random change is made to an individual's genome;
  * There are many ways to perform mutation:
    * Flip a single bit;
    * Flip multiple bits;
    * Randomly change a single gene;
    * Randomly change multiple genes.