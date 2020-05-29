
console.log("index.js called.")
const fs = require('fs');

async function runWasm() {
    console.log("run wasm")
    try {
        const buf = fs.readFileSync('./pkg/index_bg.wasm');
        let res = await WebAssembly.instantiate(buf);
        const { generate_address } = res.instance.exports
        console.log("res")
        console.log(res)
            
        var t0 = Date.now();
    
        let address = generate_address('9'.repeat(81), 0, 1, true)
        var t1 = Date.now();
    
        console.log("wasm generated address: ", address)
        console.log("Time for WASM generating address " + (t1 - t0) + " milliseconds.")
    
    } catch (error) {
        console.log("something went wrong with wasm", error)
    }
   
};

runWasm()

let { generateAddress } = require('@iota/core')
function runNormal() {
    console.log("run normal js")
    
    var t0 = Date.now();

    let address = generateAddress('9'.repeat(81), 0, 1, true)
    var t1 = Date.now();


    console.log("iota.js generated address: ", address)
    console.log("Time for normal generating address for iota.js " + (t1 - t0) + " milliseconds.")

};

runNormal()
