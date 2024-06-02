Regular Expressions enhancements include sticky (y) flag (ES6), Unicode (u) flag (ES6), dotAll (s) flag (ES2018), named capture groups (ES2018), lookbehind assertions (ES2018), and Unicode property escapes (ES2018).

```js


/*
Use the dotAll s flag to match any character including line breaks
*/
let regex = /foo.bar/s;
let result = regex.test('foo\nbar');
console.log("s flag", result);

/*
The y flag (sticky flag) ensures that the match must start at the current position
 in the target string.
*/
regex = /foo/y;
str = 'foofoo';
console.log("y flag", regex.exec(str), regex.exec(str)); 

/*
Lookbehind assertions allow you to match patterns that are preceded (positive 
lookbehind) or not preceded (negative lookbehind) by a specified pattern.
*/
// Positive Lookbehind
console.log("Positive lookbehind", 'foo123'.match(/(?<=foo)\d+/));

// Negative Lookbehind
console.log("Negative lookbehind", 'foo123'.match(/(?<!bar)\d+/));

/*
Named capture groups allow you to assign a name to a capture group, making the
 matched data more readable and accessible using <>.
*/
regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
result = regex.exec('2023-06-01');
console.log("Named groups", result.groups.year, result.groups.month, 
        result.groups.day);  


/*
Unicode property escapes allow matching Unicode characters based on their 
properties or scripts. By using the \p{} syntax with the u flag, you can create 
regular expressions that match specific types of characters, such as letters, 
numbers, punctuation, and more, across different scripts and languages
*/
regex = /\p{Script=Greek}/u;
console.log("Greek chars", regex.test('α'));

regex = /\p{P}/gu;
console.log("Punctuation chars", regex.test('Hello, World! 1234 #$%^'));


```
