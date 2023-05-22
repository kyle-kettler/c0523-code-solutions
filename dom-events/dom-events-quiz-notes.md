# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For dedugging purposes, to make sure the code is working the way we expect it to, and to make sure we are targeting the right element.

- What is the purpose of events and event handling?
  They provide a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs.

- Are all possible parameters required to use a JavaScript method or function?
  No they are not.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  The object the event listener was added too.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  a reference to the object onto which the event was dispatched. Use console.log or console.dir on the event.target

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first is passing a variable as the second argument, and the second is passing a funciton.

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
