Maps and WeakMaps are collections of key-value pairs. A Map object holds key-value pairs and remembers the original insertion order of the keys. A WeakMap is similar, but it only holds weak references to the keys.

```js
/*
Use a Map to store key-value pairs
*/
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map);

/*
Use a WeakMap to store objects with weak references as keys
*/
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, {});
console.log(weakMap.has(obj));
```

```solution
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map);

const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, {});
console.log(weakMap.has(obj));
```