# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are operators that are used to check two operands and return a boolean statement. The can be used outside of if statements with the syntax `x && y` and `x || y`

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  It means that if an operand meets the condition, the operator stops running and returns the value of the met condition.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. Whereas `||` returns a boolean value.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

  Ternary operators can only have two outcomes whereas `if/else` can have any number of conditions in the chain.

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

  It can be used to avoid error thrown by undefined or null

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

  In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

- What data types can be spread into an array? Into an object?
  Only iterable objects can be spread in arrays. Spreading in object literals enumerates the own properties of the object, so objects and arrays can be spread into objects

- How does spread syntax differ from rest syntax?
  Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
