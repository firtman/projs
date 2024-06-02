The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it, without modifying its length.

```js
/*
Use the copyWithin method to copy part of the array within the same array
*/
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4);
console.log(arr);
```

```solution
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4);
console.log(arr);
```