# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  There is a global scope that is set at the beginning of runtime, then as functions are called they set scope for themselves. Nested functions will make the scope more and more specific. Function scope is determined by the {}

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure

- What values does a closure contain?
  The function scope and any variables that are outside the function scope referenced in the function at the time of calling. Technically it contains the function combined with its lexical environment.

- When is a closure created?
  When a function is defined.

- How can you tell if a function will be created with a closure?
  If there are variables outside the funciton scope referenced in the function.

- In React, what is one important case where you need to know if a closure was created?
  When calling useEffect and referencing or setting a state variable.

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
