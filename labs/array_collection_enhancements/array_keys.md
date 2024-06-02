The `keys()` method returns a new Array Iterator object that contains the keys for each index in the array.

```js
/*
Use the keys method to get an iterator of the keys in the array
*/
const arr = [1, 2, 3, 4];
const iterator = arr.keys();
for (const key of iterator) {
  console.log(key);
}
```

```solution
const arr = [1, 2, 3, 4];
const iterator = arr.keys();
for (const key of iterator) {
  console.log(key);
}
```