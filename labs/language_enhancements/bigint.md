BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.

```js
/*
Create a BigInt and perform basic arithmetic operations
*/
const bigInt = 1234567890123456789012345678901234567890n;
const result = bigInt + 10n;
console.log(result);

// Can we mix BigInts with Number?
```