Dynamic import() allows for importing modules dynamically, returning a Promise that resolves to the module.

```js
/*
Use dynamic import to load a module
*/
import('https://example.com/module.js').then(module => {
  module.default();
});
```

```solution
import('https://example.com/module.js').then(module => {
  module.default();
});
```