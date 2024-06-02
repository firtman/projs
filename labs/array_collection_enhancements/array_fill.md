The `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length). It returns the modified array.

```js
/*
Use the fill method to fill the array with a static value
*/
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr);
```

```solution
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr);
```