# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (...args) => expression; or (...args) => { statements }

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  You can only use one expression in the function body.

- When using _concise body syntax_, how do you return an object literal?
  Wrap the object in parathese

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  ```js
  () => 42;
  ```

  - How many arguments does the arrow function take?
    0

  - What value does it return?
    42

  - How many arguments are passed to the function `foo`?
    1

  - What type of argument is passed to the function `foo`?
    function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

  ````js
    (y) => {
    console.log(`4y = ${4 * y}`);
    }
    ```

  - How many arguments does the arrow function take?
    1

  - What value does it return?
    It doesn't return anything, but it logs `4y = ${4 * y}` to the console

  - How many arguments are passed to the function `bar`?
    1

  - What type of argument is passed to the function `bar`?
    function

  - When does the arrow function's code get executed?
    When the bar() function gets called.

  ````

- How does the value of `this` differ between standard functions and arrow functions?
  Arrow functions do not have their own `this` value.

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
