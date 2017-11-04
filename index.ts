process.on("SIGINT", () => {
    console.log("Graceful shutdown started...");
    setTimeout(() => {
        console.log("Done, let's finish!");
        process.exit(0);
    }, 1000);
});

async function loop() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

loop();
