Tagged Templates provide a way to parse template literals with a function, allowing for custom processing of template strings.

```js
function tag(strings, ...values) {
  console.log("Strings length:", strings.length);
  console.log("Values length:", values.length);

  return strings[0] + values.join('');
}
const value = 'world';
const result = tag`Hello, ${world}!`;
console.log(result);


/*
Create a tagged template function bold that will return every value we pass
as <b></b> if it's a number, and as <i></i> if it's italic
*/

```

```solution
function format(strings, ...values) {
    let output = "";
    for (let i=0; i<strings.length; i++) {
        output += strings[i];
        if (i<values.length) {
            if (typeof values[i] == "number") {
                output += `<i>${values[i]}</i>`;
            } else {
                output += `<b>${values[i]}</b>`;
            }
        }
    }
    return output;
}
const result = format`Data: ${'Maria'} has been working at ${'Apple'} for ${5} years.`;
console.log(result);
```
