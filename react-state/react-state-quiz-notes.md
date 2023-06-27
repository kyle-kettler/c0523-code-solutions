# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?

They are special functions that are only available while React is rendering. They let you "hook" into React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

They start with the word 'use'; they can only be called at the top level of components; You can't call them insice conditions, loops, or other nested functions.

- What is the purpose of state in React?

Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

- Why can't we just maintain state in a local variable?

Local variables don't persist between renders and changes to local variables won't trigger a rerender.

- What two actions happen when you call a `state setter` function?

It updates the state variable and it triggers a rerender.

- When does the local `state variable` get updated with the new value?

when the state setter function gets called.

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
