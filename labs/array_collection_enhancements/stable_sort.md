The `sort()` method in JavaScript has been improved to be stable. This means that elements with equal sort order will remain in the same relative positions to each other as in the input array.

```js
/*
Use the sort method to sort the array
*/
const arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr);
```

```solution
const arr = [3, 1, 4, 1, 5, 9];
arr.sort();
console.log(arr);
```