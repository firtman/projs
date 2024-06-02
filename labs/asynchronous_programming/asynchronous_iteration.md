Asynchronous Iteration allows for iteration over data sources that return Promises, using the `for await...of` syntax.

```js
/*
Use for await...of to iterate over async data
*/
async function* asyncGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}
async function start() {
  for await (const value of asyncGenerator()) {
    alert(value);
  }
}

start();
```
