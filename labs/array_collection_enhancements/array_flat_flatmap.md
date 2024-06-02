The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.

```js
/*
Use the flat method to flatten the nested array
*/
const arr = [1, [2, [3, [4]]]];
const flattened = arr.flat(2);
console.log(flattened);

/*
Use the flatMap method to map and flatten the array
*/
const arr2 = [1, 2, 3, 4];
const result = arr2.flatMap(x => [x, x * 2]);
console.log(result);
```
