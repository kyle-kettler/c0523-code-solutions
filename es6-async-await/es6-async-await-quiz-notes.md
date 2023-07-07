# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async creates an async function and await causes the execution to pause until that line is done. It makes asynchronous functions look synchronous.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Promise are callback based, async make the code look syncronous

- When do you use `async`?
  When you need your function to be async.
  If you are going to use await in the funciton

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  When you want to wait for a promise before running the next line.
  When the function being called is not async.

- How do you handle errors with `await`?
  Wrap the await call inside of a try/catch

- What do `try`, `catch` and `throw` do? When do you use them?
  Try goes first, catch happens if an exception happens, throw creates an exception and halts the execution of the function.
  Any time you are trying to error handling.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The promise is pending and never gives and resolve or return.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await

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
