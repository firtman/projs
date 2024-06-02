`let` and `const` can create mutable and immutable scoped variables

```js
// Learn the new let and const keywords
var globalScoped = 4;

function callMe(x) {
    if (x>0) {
        var functionScoped = "Check me";

    }
    console.log(functionScoped);
}

callMe(23);
```


