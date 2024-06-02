New methods like `Promise.allSettled()`, `Promise.any()`, and `Promise.finally()` provide additional ways to work with Promises.

```js
/*
Use Promise.allSettled() to handle multiple Promises
*/
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
];
Promise.allSettled(promises).then(results => console.log(results));

/*
Use Promise.any() to get the first fulfilled Promise
*/
const value = await Promise.any(promises);

/*
Use Promise.finally() to perform an action after a Promise is settled
*/
promise.then().catch().finally(() => console.log('Promise settled'));

try {
  await promiseToFinish();
} catch {

} finally {

}

```
