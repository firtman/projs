The `matchAll()` method returns an iterator of all results matching a string against a regular expression, including capturing groups.

```js
/*
Let's say you have a block of text that contains multiple dates in the format YYYY-MM-DD, and you want to extract all of these dates.
*/
const text = `
    The project started on 2021-03-15 and the first phase was completed by 2021-04-20.
    We had a review meeting on 2021-05-10. The final deadline was 2021-06-30, which we met successfully.
`;

// Define a regular expression to match dates in the format YYYY-MM-DD
const dateRegex = /\b(\d{4})-(\d{2})-(\d{2})\b/g;

// Use matchAll to get all matches
const matches = text.matchAll(dateRegex);

// Iterate over the matches and log the results
for (const match of matches) {
    console.log(`Found date: ${match[0]}`);
    console.log(`Year: ${match[1]}, Month: ${match[2]}, Day: ${match[3]}`);
}
```
