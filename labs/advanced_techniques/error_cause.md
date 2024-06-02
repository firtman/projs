The Error cause property allows attaching a cause to an Error object, providing additional context for the error.

```js
/*
Create an Error with a cause
*/
try {
  throw new Error('Something went wrong', { cause: new Error('Original error') });
} catch (error) {
  console.log(error.cause);
}
```

```solution
try {
  throw new Error('Something went wrong', { cause: new Error('Original error') });
} catch (error) {
  console.log(error.cause);
}
```