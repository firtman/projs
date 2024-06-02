New methods like `Number.isFinite()`, `Number.isInteger()`, `Number.isSafeInteger()`, and `Number.isNaN()` help in number validation and checking.

New constants like `Number.EPSILON`, `Number.MAX_SAFE_INTEGER`, and `Number.MIN_SAFE_INTEGER` provide additional functionality for dealing with numbers.

Numeric separators improve the readability of large numeric literals by allowing underscores as separators.


```js
console.log(Number.isFinite(123));
console.log(Number.isInteger(123.456));
console.log(Number.isSafeInteger(123));
console.log(Number.isNaN(NaN));

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const largeNumber = 1_000_000_000;
console.log(largeNumber);
```
