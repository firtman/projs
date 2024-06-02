New string methods in ES6 include `startsWith()`, `endsWith()`, and `includes()` for easier string manipulation. The `repeat()` method constructs and returns a new string which copies concatenated together.


```js
/*
Use startsWith(), endsWith(), and includes() to check substrings
*/
const str = 'Hello, world!';
console.log(str.startsWith('Hello'));
console.log(str.endsWith('world!'));
console.log(str.includes('o, w'));

const original = 'abc';
const result = original.repeat(3);
console.log(result);
```
