Typed Arrays in JavaScript efficiently handle raw binary data, ideal for Web APIs and performance-critical tasks. Some examples: `Int8Array`, `Uint8Array`, 
`Int32Array`, `Float32Array`, `Float64Array`

```js
// Creating a new Int16Array with 5 elements, all initialized to 0
const int16Array = new Int16Array(5);
console.log("Int16Array", int16Array); 

// Creating a new Uint8Array from an array of numbers
const uint8Array = Uint8Array.from([10, 20, 30, 40, 50]);
console.log("UInt8Array", uint8Array); 

// Using the set method to copy values from one TypedArray to another
const sourceArray = new Uint8Array([1, 2, 3]);
const targetArray = new Uint8Array(5);
targetArray.set(sourceArray, 1); 
console.log(targetArray); // Output: Uint8Array [0, 1, 2, 3, 0]
```