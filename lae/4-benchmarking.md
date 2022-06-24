# Benchmarking

A benchmark is simply a test that is used to compare similar products. A computer benchmarking program works by running a series of well-defined tests on the PC to **measure its performance**.

Side-effects a evitar:

* Garbage collection;
* IO operations;
* Extra tools, like IDE, gradle, etc.;

Para otimizar, incluir iterações de _warm-up_.

---

## [Java Microbenchmark Harness (JMH)](https://github.com/openjdk/jmh)

_JMH is a Java harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targeting the JVM._

Funções de teste de benchmark são anotados com a anotação `@Benchmark`.

Opções para executar a benchmark:

* Forks (-f);
* Warmup Iterations (-wi);
* Iterations (-i);
* Warmup Iteration Duration (-w);
* Iteration Duration (-r);
* Time Unit (-u).

Existe um plugin para o Gradle para executar benchmarks: [jmh-gradle-plugin](https://github.com/melix/jmh-gradle-plugin).
