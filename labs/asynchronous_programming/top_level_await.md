Top-level await allows the use of the await keyword outside of async functions, at the top level of modules.

```js
/*
Use top-level await to fetch data at the module level
*/
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
```

```solution
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
```