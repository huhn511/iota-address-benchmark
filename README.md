
# iota-address-benchmark
Testing address generation iota.js vs WASM

## Benchmark Results

browser
```bash
Time with iota.js: 375.095 ms
Time with WASM: 32.320 ms
```

nodejs
```bash
Time with iota.js: 326 ms
Time with WASM: 42 ms
```

Run local
```bash
npm install
npm run serve
```

build
```bash
npm run build
```

build nodejs
```bash
npm run build:nodejs
```


inspired by - [Thoralf-M/iota-kerladdress-wasm](https://github.com/Thoralf-M/iota-kerladdress-wasm)