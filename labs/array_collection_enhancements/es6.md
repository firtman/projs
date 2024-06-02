`keys`, `values_entries`, `copywithin`, and `fill` are ES6 additions to the Array prototype.


```js
// The keys method returns an iterator for the keys (indexes) of the array
const arr = ['a', 'b', 'c'];
const keys = arr.keys();
for (let key of keys) {
    console.log("keys: ", key); 
}

// The values method returns an iterator for the values of the array
const values = arr.values();
for (let value of values) {
    console.log("values", value);
}

// The entries method returns an iterator for the key/value pairs of the array
const entries = arr.entries();
for (let [index, value] of entries) {
    console.log(index, value); 
}

// The copyWithin method copies part of the array to another location in the same array
const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(0, 3); // Copy elements starting at 3 to the start of the array
console.log("copyWithin", arr2);

// The fill method changes all elements in the array to a static value
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2, 4); // Fill with 0 from index 2 to index 4 (exclusive)
console.log("fill", arr3); 
```