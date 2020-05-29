
console.log("index.js called.")

async function run() {
    let wasmmodule = await import('./pkg')

    console.log("wasmmodule")
    console.log(wasmmodule)
    
    let addresses = wasmmodule.generate_addresses('9'.repeat(81), 0, 9, 1, true)
    
    console.log("addresses")
    console.log(addresses)
};

run()