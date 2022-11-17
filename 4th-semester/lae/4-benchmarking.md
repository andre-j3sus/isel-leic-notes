# Benchmarking

> A benchmark is simply a test that is used to compare similar products. A computer benchmarking program works by running a series of well-defined tests on the PC to **measure its performance**.

**Side-effects to avoid**:

* Garbage collection;
* IO operations;
* Extra tools, like IDE, gradle, etc -> run directly on VM.

To **optimize**, include _warm-up_ iterations.

---

## [Java Microbenchmark Harness (JMH)](https://github.com/openjdk/jmh)

_JMH is a Java harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targeting the JVM._

**Benchmark methods** are annotated with the `@Benchmark` annotation.

Benchmark options:

* Forks (`-f`);
* Warmup Iterations (`-wi`);
* Iterations (`-i`);
* Warmup Iteration Duration (`-w`);
* Iteration Duration (`-r`);
* Time Unit (`-u`).

There is also a plugin for Gradle to run benchmarks: [jmh-gradle-plugin](https://github.com/melix/jmh-gradle-plugin).
