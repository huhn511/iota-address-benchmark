
console.log("index.js called.")

async function runWasm() {
    console.log("run wasm")
    let wasmmodule = await import('./pkg')

    console.log(wasmmodule)
    
    var t0 = performance.now()
    let address = wasmmodule.generate_address('9'.repeat(81), 0, 1, true)
    var t1 = performance.now()

    console.log("wasm generated address: ", address)
    console.log("Time for WASM generating address " + (t1 - t0) + " milliseconds.")

};

runWasm()

import { generateAddress } from '@iota/core'
async function runNormal() {
    console.log("run normal js")
    
    var t0 = performance.now()
    let address = generateAddress('9'.repeat(81), 0, 1, true)
    var t1 = performance.now()

    console.log("iota.js generated address: ", address)
    console.log("Time for normal generating address for iota.js " + (t1 - t0) + " milliseconds.")

};

runNormal()
