# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  Reusable UI elements for an app

- How do you use JSX in a React component?
  You return it from the component function.

- How do you declare the props a React component needs?
  You pass them into the component function, like you would a parameter and then in the JSX you add them like HTML attributes.

- How do you pass props to a React component?
  To pass props, add them to the JSX, just like you would with HTML attributes.

- How do you include JavaScript expressions in JSX?
  Surround it in {}, curly braces are a 'window' into javascript/

- What are React hooks and what are the three "Rules of Hooks"?
  Hooks are special function that let you 'hook' into special featurs of react.
  They start with the word 'use'; they can only be called at the top level of components; You can't call them insice conditions, loops, or other nested functions.

- How do you manage state in a React component?
  By important useState() and then controlling it with the state setter functions and state variable.

- How do you handle events in React?
  With event hanlders, which are your own functions that are trigged by certain events lilke clicking, hovering, submiting a form, etc.

- How do you let a parent component know that an event happened?
  By passing a custom prop with an a function from the child to the parent.

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
