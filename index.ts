import * as cluster from "cluster";

if (cluster.isMaster) {
    cluster.fork();
    process.on("SIGINT", () => {
        console.log("Shutting down MASTER...");
        setTimeout(() => {
            console.log("MASTER has been shut down.");
            process.exit(0);
        }, 1000);
    });

} else {
    process.on("SIGINT", () => {
        console.log("Shutting down CHILD...");
        setTimeout(() => {
            console.log("CHILD has been shut down.");
            process.exit(0);
        }, 1000);
    });
}

async function loop() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

loop();