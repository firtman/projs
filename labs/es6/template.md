Uses the backtick <code>`</code> for interpolation and multiline strings.

```js
// Use Template Strings to enhance the message declaration.

let firstname = "Alice";
let age = 25;
let city = "New York";

let message = "Hello, my name is \"" + firstname + "\"" +
    ". \nI am " + age + " years old and I live in " +
    city + ".";

console.log(message);
```

```solution
let firstname = "Alice";
let age = 25;
let city = "New York";

let message = `Hello, my name is "${firstname}". 
I am ${age} years old and I live in ${city}.`;

console.log(message);
```
