# Unix Computing Model

## Kernel

* *It is the core that provides basic services for all other parts of the OS;*
* Has privileged access to the hardware;

## Shell pipeline and redirection

* The most famous shell is [**BASH**](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) - The Bourne Again SHell;
* The [`/etc/passwd`](https://www.cyberciti.biz/faq/understanding-etcpasswd-file-format/) file keeps track of every registered user that has access to the system;
  * Contains one entry per line for each user;
  * All fields are separated by a colon `:` character;
  * E.g. `root:x:0:0:root:/root:/bin/bash`;
  * username, password, user ID, group ID, user description, home directory, shell.
* The `/dev/null` file is a special file that discards all data written to it;

### Pipeline

* The pipeline is a way to connect the output of one command to the input of another command;
* Commands are separated by the pipe character `|`;
* The pipes are synchronous objects and have a buffer to receive data;
* Example:

```bash
$ cat abc.txt | grep hello | wc -l
```

In this example, the output of `cat abc.txt` is piped to the input of `grep "hello"`, and the output of `grep "hello"` is piped to the input of `wc -l`.

### Redirection

* The redirection is a way to connect the output of one command to a file;
* It is done using the `>` character;
* It is possible to connect the input of a command to a file using the `<` character;
* Examples:

```bash
$ cat abc.txt > def.txt  # Redirects the output of cat abc.txt to def.txt
$ cat < abc.txt          # Redirects the input of cat to abc.txt
```

---

## File Descriptor Table

* *The collection of integer array indices that are file descriptors in which elements are pointers to file table entries;*
* In each process, there is a file descriptor table;
* Each entry in the file descriptor table is a pointer to a file table entry:

<p align="center">
    <img src="./docs/tvs-diagrams-File%20Descriptor%20Table.svg" alt="File Descriptor Table" align="center"/>
</p>

* The first three entries in the file descriptor table are the following:
  * 0 - stdin;
  * 1 - stdout;
  * 2 - stderr;
* To write to a file, its used the function `write(fd, buffer, size)`, C;

```c
int res = write(1, "prog running\n", 14); // write(int fd, const void *buf, size_t count);
```

In this example, the `write` function writes the string `"prog running\n"` to the file descriptor `1`, which is the standard output.

* The `errno` variable is used to store the error code of the last system call;
* The `perror` function prints the error message associated with the error code stored in the `errno` variable;
* Examples:

```bash
# Executes the program and redirects the stdout to the file out.txt
$ ./a.out > out.txt # Its the same as ./a.out 1> out.txt
...
$ ./a.out 2> error.txt # Redirects the stderr to the file out.txt
...
$ ./a.out 3>&1 # Redirects the file descriptor 3 to the file descriptor 1
...
$ ./a.out 1> result.txt 2>&1 # Redirects the stdout and stderr to the file result.txt
```

### Duplication

* The `dup` function duplicates a file descriptor entry;
* The `dup2`function duplicates a file descriptor entry to a specific file descriptor (closing the previous one);

```c
int fd = dup(1); // Duplicates the file descriptor 1 to the next available file descriptor
int fd = dup2(1, 11); // Duplicates the file descriptor 1 to the file descriptor 11
```

### Fork and Wait

* The `fork` function creates a new process;
  * Its called once, but returns twice, once in the parent process and once in the child process;
    * The return type of the `fork` function is `pid_t`;
    * The return value of the child process is `0`;
    * The return value of the parent process is the PID of the child process;
  * The execution point is the same in both processes;

#### Parent and child process

* Each process has a **parent process**, except for the first process, which is the root process;
* Each process has a **unique process ID (PID)**;
  * To get the PID of the current process, use the `getpid` function;
  * To get the PID of the parent process, use the `getppid` function;
* The return value of the child process is passed to the parent process, and the parent process can get it only once;
* If the parent process does not wait for the child process, the child process becomes a **zombie process** - a process that has finished execution but still has an entry in the process table;
* The `wait` and `waitpid` functions are used to wait for the child process to finish execution;
  * The `wait` function waits for any child process to finish execution;
  * The `waitpid` function waits for a specific child process to finish execution;

### Exec

* The `exec` family of functions replaces the current process with a new process;
* ...


