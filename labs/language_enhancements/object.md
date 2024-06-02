Object.assign (ES2015).

Object.entries (ES2017), Object.values (ES2017), and Object.fromEntries (ES2019).

Object.hasOwn (ES2022) 

Object.is (ES6)


```js
/*
Assign is used to copy the values of all enumerable own 
properties from one or more source objects to 
a target object.
*/
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log("Assign:", JSON.stringify(returnedTarget));

/*
Use Object.entries() to get an array of key-value pairs 
from the object
*/
let obj = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj);
console.log("Entries:", JSON.stringify(entries));

/*
Use Object.values() to get an array of values from the object
*/
let values = Object.values(obj);
console.log("Values:", JSON.stringify(values));

/*
Use Object.fromEntries() to convert an array of key-value 
pairs back to an object
*/
let newObj = Object.fromEntries(entries);
console.log("From Entries:", JSON.stringify(newObj));

/*
Use Object.hasOwn() is used to determine whether an object
 has a property as its own (not inherited) property.
*/
obj = { a: 1 };
console.log("hasOwn:", Object.hasOwn(obj, 'a'));
console.log("hasOwn:", Object.hasOwn(obj, 'toString'));

/*
Using Object.is determines whether two values are the same 
value. It is similar to the `===` operator but with some
 differences with NaN values.
*/
console.log("is:", Object.is('foo', 'foo'));
console.log("is:", Object.is([], []));

```