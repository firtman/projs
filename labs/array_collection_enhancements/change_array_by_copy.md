ES2023 introduced several array methods that create modified copies of the array without changing the original array. These methods include `toReversed`, `toSorted`, `toSpliced`, and `with`.

```js
// toReversed method creates a new array with the elements in reverse order
const numbers = [1, 2, 3];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
console.log(numbers);

// toSorted method creates a new array with the elements sorted in ascending order
const unsortedNumbers = [3, 1, 2];
const sortedNumbers = unsortedNumbers.toSorted();
console.log(sortedNumbers);
console.log(unsortedNumbers);

// toSpliced method creates a new array with some elements removed/replaced
const originalArray = [1, 2, 3, 4, 5];
const splicedArray = originalArray.toSpliced(1, 2, 'a', 'b');
console.log(splicedArray);
console.log(originalArray);

// with method creates a new array with an element at a specific index replaced
const replacedArray = originalArray.with(2, 10);
console.log(replacedArray);
console.log(originalArray);
```