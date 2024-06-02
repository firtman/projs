Symbols are unique and immutable primitive values, often used to create unique property keys for objects.

```js
/*
Create a Symbol and use it as a property key in an object
*/
const sym = Symbol('description');
const obj = {
  [sym]: 'value'
};
console.log(obj[sym]);

const globalSymbol = Symbol.for('description');

```