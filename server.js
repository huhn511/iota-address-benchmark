
console.log("index.js called.")

async function runWasm() {
    console.log("run wasm")
    try {
    
        const { generate_address } =  require('./wasm-node/iota_address_benchmark')
            
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
