# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.

- What is the affect of setting an element to `display: none`?
  It hides it from the page

- What does the `element.matches()` method take as an argument and what does it return?
  A valid CSS selector

- How can you retrieve the value of an element's attribute?
  with `getAttribute()`

- At what steps of the solution would it be helpful to log things to the console?
  At any point you need to check if your code is working. I logged messages in the if statements to figure out how to properly write the conditional statements.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  At the minimum you would need to write another event listener, but if you had callback functions for each teb, you would need to write an entire new callback function for the new tab.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You could write a large `if else` branch to determine which items needed their classes changed. It would need to be very large to handle all the possible combinations.

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
