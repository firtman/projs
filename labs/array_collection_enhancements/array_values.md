The `values()` method returns a new Array Iterator object that contains the values for each index in the array.

```js
/*
Use the values method to get an iterator of the values in the array
*/
const arr = [1, 2, 3, 4];
const iterator = arr.values();
for (const value of iterator) {
  console.log(value);
}
```

```solution
const arr = [1, 2, 3, 4];
const iterator = arr.values();
for (const value of iterator) {
  console.log(value);
}
```