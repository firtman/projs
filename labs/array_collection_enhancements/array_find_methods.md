Finding the first element methods were added in ES6+ and the last element in 2023.

```js
/*
The `find()` method returns the value of the first element that satisfies the provided testing function. 
*/
const arr = [1, 2, 3, 4];
const even = arr.find(x => x % 2 === 0);
console.log(even);

/*
The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
*/
const arr2 = [1, 2, 3, 4];
const evenIndex = arr2.findIndex(x => x % 2 === 0);
console.log(evenIndex);
/*
The `findLast()` method returns the value of the last element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
*/
const arr3 = [1, 2, 3, 4];
const lastEven = arr3.findLast(x => x % 2 === 0);
console.log(lastEven);
/*
The `findLastIndex()` method returns the index of the last element in the array that satisfies the provided testing function. Otherwise, it returns -1.
*/
const arr4 = [1, 2, 3, 4];
const lastEvenIndex = arr4.findLastIndex(x => x % 2 === 0);
console.log(lastEvenIndex);
```
