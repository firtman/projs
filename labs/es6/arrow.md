Arrow functions can replace `function` and have new abilities

```js
// Traditional function expression
var multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 3)); // Output: 12

// Arrow function with implicit return
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// Arrow function and lexical `this`
function Counter() {
  this.count = 0;

  setInterval(() => {
    this.count++;
    console.log(this.count); // `this` refers to the Counter instance
  }, 1000);
}

const counter = new Counter();

// Arguments object in traditional function
function showArguments() {
  console.log(JSON.stringify(arguments));
}
showArguments(1, 2, 3); // Outputs: [1, 2, 3]

// Arrow function and arguments object
const showArrowArguments = () => {
  console.log(JSON.stringify(arguments))
}

```
