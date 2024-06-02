The `padStart()` and `padEnd()` methods pad the current string with another string until the resulting string reaches the given length.

```js
/*
Use padStart and padEnd to pad the string '5' to a length of 5 with '0'
*/
const str = '5';
const paddedStart = str; // TODO
const paddedEnd = str //TODO
console.log(paddedStart, paddedEnd);
```

```solution
const str = '5';
const paddedStart = str.padStart(5, '0');
const paddedEnd = str.padEnd(5, '0');
console.log(paddedStart, paddedEnd);
```