# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging code and to understand when and what is happening in the code.

- What is a method?
  A function that is a property of an object.

- How is a method different from any other function?
  Methods can only be used with the object they are a property of. log() wouldn't do anything, but console.log() will call the log method of the console object.

- How do you remove the last element from an array?
  The pop() method removes the last element of an array.

- How do you round a number down to the nearest integer?
  The Math.floor() method

- How do you generate a random number?
  The Math.random() method generates a random number between 0 and 1, it can then be mutiplied to be turned into an integer.

- How do you delete an element from an array?
  The splice() method has deleteCount parameter that can be used to delete a specific element. The last element can be deleted with pop() and the first element can be deleted with shift().

- How do you append an element to an array?
  With the push() method.

- How do you break a string up into an array?
  With the split() method.

- Do string methods change the original string? How would you check if you weren't sure?
  No they do not. You can check by logging the original string to the console.

- Roughly how many string methods are there according to the MDN Web docs?
  Approx. 37

- Is the return value of a function or method useful in every situation?
  No, it is often useful, but not always needed.

- Roughly how many array methods are there according to the MDN Web docs?
  Approx. 44

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  mdn

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
