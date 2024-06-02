Class fields declarations allow fields (public or private) to be declared in the class body, adding also private methods.

```js
/*
Define a class with private fields and methods
*/
class MyClass {
  publicField = "I'm a public field, no need for a constructor to define me";
  #privateField = 42;
  #privateMethod() {
    return 'Hello';
  }
  getPrivateData() {
    return `${this.#privateField} - ${this.#privateMethod()}`;
  }
}

const instance = new MyClass();
console.log(instance.publicField)
console.log(instance.getPrivateData());
```
