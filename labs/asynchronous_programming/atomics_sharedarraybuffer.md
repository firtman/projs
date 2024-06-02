Atomics and SharedArrayBuffer provide a way for multiple threads to share and modify data in a synchronized manner.

```js
/*
Use SharedArrayBuffer to create a buffer shared between threads
*/
const buffer = new SharedArrayBuffer(1024);
const uint8 = new Uint8Array(buffer);
Atomics.add(uint8, 0, 1);
console.log(Atomics.load(uint8, 0));
```

```solution
const buffer = new SharedArrayBuffer(1024);
const uint8 = new Uint8Array(buffer);
Atomics.add(uint8, 0, 1);
console.log(Atomics.load(uint8, 0));
```