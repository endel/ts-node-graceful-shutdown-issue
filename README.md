# ts-node: issue listening to `SIGINT`

All versions of `ts-node` (3.3.0 at the time of this writing) doesn't have the
expected behaviour when gracefully shutting down a Node.js application.

## `ts-node` behaviour:

Process is dettached from terminal as soon as `SIGINT` is received.

```
./node_modules/.bin/ts-node index.ts
^CGraceful shutdown started...

[21:22:41] endel:~/Projects/ts-node-graceful-shutdown-issue [master #]
$ Done, let's finish!
```

## `node` behaviour:

Process is dettached from terminal only after `process.exit()` is called.

```
$ node index.js
^CGraceful shutdown started...
Done, let's finish!
[21:23:34] endel:~/Projects/ts-node-graceful-shutdown-issue [master #]
```
