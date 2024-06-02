Trailing commas allow for cleaner diffs when adding or removing items from arrays, objects, or function parameters. They are ignored in the syntax, making it easier to manage lists of items.

```js
/*
Add trailing commas to the following arrays and objects
*/
const arr = [
  1,
  2
];

const obj = {
  name: 'John',
  age: 30
};

function test(a, b) {
  return a+b
}
```

```solution
const arr = [
  1,
  2,
];

const obj = {
  name: 'John',
  age: 30,
};
```