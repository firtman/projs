The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```js
/*
Use the entries method to get an iterator of the key/value pairs in the array
*/
const arr = [1, 2, 3, 4];
const iterator = arr.entries();
for (const entry of iterator) {
  console.log(entry);
}
```

```solution
const arr = [1, 2, 3, 4];
const iterator = arr.entries();
for (const entry of iterator) {
  console.log(entry);
}
```