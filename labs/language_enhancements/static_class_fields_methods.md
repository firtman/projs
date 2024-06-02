Static class fields and methods are defined on the class itself, rather than instances of the class.

```js
/*
Define a class with static fields and methods
*/
class MyClass {
  static staticField = 42;
  static staticMethod() {
    return 'Hello';
  }
}
console.log(MyClass.staticField);
console.log(MyClass.staticMethod());
```
