Private class variables, indicated by a `#` prefix, provide a way to define private fields within a class.

```js
/*
Define a class with a private variable using the # prefix
*/
class MyClass {

  get privateVar() {
    //TODO
  }

}

const instance = new MyClass();
console.log(instance.privateVar);
```

```solution
class MyClass {

  #privateVar = 45;

  get privateVar() {
    return this.#privateVar;
  }
}

const instance = new MyClass();
console.log(instance.privateVar);
```