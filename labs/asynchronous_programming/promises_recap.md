Promises provide a way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never.

```js
/*
Convert this callback example to the Promise pattern and handle it with then and catch
*/
function doInSeconds(seconds, callback) {
  setTimeout(callback, seconds*1000)
}

console.log("Setting the alert in 2 seconds");
doInSeconds(2, ()=>alert("2 seconds!"));

```

```solution

function doInSeconds(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), seconds * 1000);
  });

}
console.log("Setting the alert in 2 seconds");

doInSeconds(2)
    .then(value => alert(value))
    .catch(error => alert(error));
```