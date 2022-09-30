# Unix/Linux File System

> File System is a collection of data structures and algorithms that manages the storage and retrieval of files from the disk.

* **Unique file system**, without drivers, only a **directory tree**;
* Partially normalized - [FHS](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard);
* Directories, files and other objects;
* **Files doesn't have a name -> a name has a file**;

File systems:

* **Windows**: FAT, NTFS, ReFS;
* **Linux**: ext2, ext3, ext4;

**Journaling** - a mechanism that records all file system changes to a special file, called a **journal**, before they are applied to the file system. If the system crashes, the journal can be used to **restore** the file system to a consistent state.

**Mount point** - a directory in the file system that is used to **attach** another file system to the directory tree. e.g. `/mnt` or `/media`.

---

## File Types

| File Type        | Location | Denoted by |
| ---------------- | -------- | ---------- |
| Regular File     | Anywhere | `-`        |
| Directory        | Anywhere | `d`        |
| Symbolic Link    | /dev     | `l`        |
| Block Device     | /dev     | `b`        |
| Character Device | /dev     | `c`        |
| Socket           | /dev     | `s`        |
| Named Pipe       | /dev     | `p`        |


---

## [Root Directories](https://averagelinuxuser.com/linux-root-folders-explained/)

* `/bin` - user binaries; programs that are used by **all users**;
* `/sbin` - system binaries; programs that are used by the **superuser**;
* `/boot` - boot files; contains the **kernel** and the **boot loader**;
* `dev` - device files; 
* `/etc` - configuration files;
* `/home` - home directories; private directories **for each user**;
* `/lib` - libraries; libraries used by the system;
* `/mnt` - **mount point**; used to mount other file systems;
* `/proc` - **kernel files**;
* `/root` - root home directory;