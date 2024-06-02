The `with()` method returns a new array with an updated value at the specified index. It does not modify the original array.

```js
/*
Use the with method to create a new array with an updated value
*/
const arr = [1, 2, 3, 4, 5];
const updated = arr.with(2, 10);
console.log(updated);
```

```solution
const arr = [1, 2, 3, 4, 5];
const updated = arr.with(2, 10);
console.log(updated);
```