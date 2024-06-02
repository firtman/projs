`globalThis` provides a consistent way to access the global object across different environments (browsers, Node.js, web workers). It unifies various methods (`window`, `global`, `self`) into a single reference, making code more portable and reliable.

```js
/*
Change the following code to use globalThis
*/
window.scrollX = 10;
global.setTimeout(()=>{console.log('Hey'), 3000});
self.addEventListener('fetch', ()=>{});
```

```solution
globalThis.scrollX = 10;
globalThis.setTimeout(()=>{console.log('Hey'), 3000});
globalThis.addEventListener('fetch', ()=>{});
```