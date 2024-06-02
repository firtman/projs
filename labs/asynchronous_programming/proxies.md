Proxies provide a way to create a wrapper around an object or function that intercepts and customizes operations performed on it.

```js
/*
Use a Proxy to intercept operations on an object
*/
const target = {};
const handler = {
  get: (obj, prop) => {
    return prop in obj ? obj[prop] : 'default';
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
```

```solution
const target = {};
const handler = {
  get: (obj, prop) => {
    return prop in obj ? obj[prop] : 'default';
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
```