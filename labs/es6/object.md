```js
// Defining some variables
const name = 'Alice';
const age = 30;

// Defining a function
function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

// Computed property name
const dynamicKey = 'whatever';

// Using Enhanced Object Literals
const person = {
  // Shorthand property names (if the variable name is the same as the property name)
  name,
  age,

  // Method definition shorthand
  greet,

  // Computed property name
  [dynamicKey]: 'This is a dynamic value',

  // Defining a method
  toString() {
    return `${this.name} is ${this.age} years old.`;
  }
};

person.greet(); // Output: Hello, my name is Alice.
console.log(person.toString()); // Output: Alice is 30 years old.
console.log(person.whatever); // Output: This is a dynamic value
```