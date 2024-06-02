Default values for function arguments

```js
// Use default values for arguments

function calculateTax(price, tax) {
    if (tax==undefined) {
        tax = 0.2;
    }
    return price + price * tax;
}

console.log(calculateTax(1000, 0.1));
console.log(calculateTax(1000));
```

```solution
function calculateTax(price, tax=0.2) {
    return price + price * tax;
}

console.log(calculateTax(1000, 0.1));
console.log(calculateTax(1000));
```