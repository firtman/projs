Class syntax to create classes with inheritance

```js
// Base class
class Person {

  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Getter
  get info() {
    return `${this.name} is ${this.age} years old.`;
  }

  // Setter
  set info(newInfo) {
    const [name, age] = newInfo.split(' ');
    this.name = name;
    this.age = parseInt(age);
  }

  // Instance method
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Subclass
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the base class
    this.jobTitle = jobTitle;
  }

  // Overriding the greet method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}.`);
  }
}

// Create an instance of the Person class
const person = new Person('Alice', 30);
console.log(person.info); // Output: Alice is 30 years old.
person.greet(); // Output: Hello, my name is Alice.
person.info = 'Bob 40';
console.log(person.info); // Output: Bob is 40 years old.
console.log(Person.species()); // Output: Homo sapiens

// Create an instance of the Employee subclass
const employee = new Employee('Charlie', 35, 'developer');
console.log(employee.info); // Output: Charlie is 35 years old.
employee.greet(); // Output: Hello, my name is Charlie and I am a developer.
console.log(Employee.species()); // Output: Homo sapiens
```