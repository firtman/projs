Iterators provide a way to access elements of a collection one at a time. The for...of loop is a simple and concise way to iterate over iterable objects like arrays, strings, maps, sets, and more.

```js
class Countdown {
    constructor(start) {
        this.start = start;
    }

    [Symbol.iterator]() {
        let current = this.start;

        return {
            next() {
                if (current >= 0) {
                    return { value: current--, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}

// Create an instance of Countdown
const countdown = new Countdown(5);

// Use the for...of loop to iterate over the countdown
for (const number of countdown) {
    console.log(number);
}
```