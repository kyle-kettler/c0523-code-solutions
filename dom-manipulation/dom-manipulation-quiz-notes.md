# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  The className property of the Element interface gets and sets the value of the class attribute of the specified element.

- How do you update the CSS class attribute of an element using JavaScript?
  With the className property of element objects.

- What is the `textContent` property of element objects?
  The textContent property of the Node interface represents the text content of the node and its descendants.

- How do you update the text within an element using JavaScript?
  With the textContent or the innerText property of element objects

- Is the `event` parameter of an event listener callback always useful?
  Essentailly yes because it is good to make sure it is not referencing the global "Event" object.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  More complicated because you would need to update the text on the page manually for every click.

- Why is storing information about a program in variables better than only storing it in the DOM?
  Varaibles are easier to access, manipulate, and shorter to type out once created. They can also hold the state of of the dom.

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
