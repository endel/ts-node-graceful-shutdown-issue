# ts-node: issue listening to `SIGINT` using child processes 

Whilst issue [457](https://github.com/TypeStrong/ts-node/issues/457) has been fixed on version `4.1.x` of `ts-node`, when using child processes, `ts-node` is still miss-behaving.

I'm using the `cluster` module, and listening for the `SIGINT` signal on the master and child processes.

## `ts-node` behaviour:

SIGINT can be catched only for the master process.

```
$ ./node_modules/.bin/ts-node index.ts
^CShutting down MASTER...
MASTER has been shut down.
```

## `node` behaviour:

SIGINT can be catched for master and child process.

```
$ node index.js
^CShutting down CHILD...
Shutting down MASTER...
CHILD has been shut down.
MASTER has been shut down.
```