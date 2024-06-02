Optional catch binding allows you to omit the error parameter if it is not needed, simplifying the code and making it cleaner.

```js
/*
Rewrite the following catch blocks to omit the error parameter if it's not used
*/
try {
  // some code that might throw
} catch (error) {
  console.error('An error occurred');
}

try {
  // some code that might throw
} catch (e) {
  // do nothing
}
```

```solution
try {
  // some code that might throw
} catch {
  console.error('An error occurred');
}

try {
  // some code that might throw
} catch {
  // do nothing
}
```