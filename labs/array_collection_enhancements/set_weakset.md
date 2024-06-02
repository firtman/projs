Sets and WeakSets are collections of values. A value in the Set may only occur once; a map is a key-value of any pair of types. Weak versions only accept objects and they don't store a trong 

```js
/*
Use a Set to store unique values
*/
const set = new Set([1, 2, 2, 3, 4, { name: "Julia" }]);
console.log("Set size:", set.size);

// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set(3, 'three');
myMap.set({ key: 'objKey' }, 'objectValue');

// Accessing values by key
console.log("Map a: ", myMap.get('a')); // 1
console.log("Map 3: ", myMap.get(3));   // 'three'

// Checking for existence of a key
console.log("Map has 'b':", myMap.has('b')); // true


/*
Use a WeakSet to store objects with weak references
*/
const weakSet = new WeakSet([{ name: "Julia"}]);
let obj = {};
weakSet.add(obj);
// console.log(weakSet.has(obj));

// Remove the strong reference to obj
obj = null;

// At some point after this, obj might be garbage collected by the JavaScript engine
// Check if obj is still in the WeakSet
// console.log(weakSet.has(obj)); 

```
