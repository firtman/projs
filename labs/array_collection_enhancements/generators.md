Generators are special functions that can pause and resume their execution, allowing them to yield multiple values over time, making it easier to implement iterators and handle asynchronous programming.

```js

function *generate() {
  yield 1;
  yield 2;
}

// How do we call a generator and use the values? 🤔
// is it `const v = generate()`?



// Re-doing the iterators example with generators
class Countdown {
    constructor(start) {
        this.start = start;
    }

    *[Symbol.iterator]() {
        for (let i = this.start; i >= 0; i--) {
            yield i;
        }
    }
}

// Create an instance of Countdown
const countdown = new Countdown(5);

// Use the for...of loop to iterate over the countdown
for (const number of countdown) {
    console.log(number);
}

```