The Nullish Coalescing Operator (??) provides a way to fall back to a default value when dealing with `null` or `undefined` values.

```js
/*
Use the nullish coalescing operator ?? to provide a default value
*/
const value = null;
//const result = value ? 'default' : undefined;
let result;
if (value) {
    result = value;
} else {
    resulta = 'default';
}
console.log(result);
```

```solution
const value = null;
const result = value ?? 'default';
console.log(result);
```