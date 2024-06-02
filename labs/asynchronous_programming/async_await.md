The async/await syntax provides a way to work with asynchronous code in a more synchronous fashion, making it easier to read and write.

```js
/*
Convert the start function into async/await syntax
*/
function doInSeconds(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), seconds * 1000);
  });
}
console.log("Setting the alert in 2 seconds");

function start() {
  doInSeconds(2)
    .then(value => alert(value))
    .catch(error => alert(error));
}

start();
```

```solution

function doInSeconds(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), seconds * 1000);
  });
}
console.log("Setting the alert in 2 seconds");

async function start() {
  try {
    const value = await doInSeconds(2);
    alert(value)
  } catch (e) {
    alert(error);
  }
}

start();

```