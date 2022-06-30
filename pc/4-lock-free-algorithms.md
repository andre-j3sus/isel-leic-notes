# Lock-free Algorithms

_An algorithm is lock-free if infinitely often operation by some processors will succeed in a finite number of steps. For instance, if N processors are trying to execute an operation, some of the N processes will succeed in finishing the operation in a finite number of steps and others might fail and retry on failure._

* Usados para aumentar a performance;
* Se múltiplas threads tentam aceder ao mesmo recurso, **pelo menos uma irá conseguir**, e as restantes voltarão a tentar -> não existe **obstrução**.

## Compare and Set/Swap (CAS)

* Operação utilizada nos algoritmos lock-free;
* É passado como parâmetro um valor observado, e se este for igual ao valor atual, então o valor é alterado para o novo valor;
* Retorna true se for bem sucedido.

Os tipos atomic (`java.util.concurrent.atomic`), como `AtomicInteger` e `AtomicReference<T>` possuem um método `compareAndSet` que faz o compare and swap.

Exemplo para AtomicInteger: `boolean compareAndSet(int expect, int update)`