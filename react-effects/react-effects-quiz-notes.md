# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it is commited to the DOM by react either in initial creation or through a state update.

- What is a React Effect?
  A function that lets you specify side effects that are caused by rendering itself, rather than by a particular event.

- When should you use an Effect and when should you not use an Effect?
  Effects are typically used to “step out” of your React code and synchronize with some external system. If you aren't synchronizing with an external system you might not need an effect.

- When do Effects run?
  On every rerender by default, but you can control it with the dependecies array. When those dependencies change, the Effect runs.

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  A list of all reactive values referenced inside of the setup code. You put them in the dependecies array which is the second parameter of the useEffect function.

- Why would you want to clean up from an Effect?
  When you need to specify when to stop, undo, or clean up an effect.

- How do you clean up from an Effect?
  By returning a cleanup function from useEffect().

- When does the cleanup function run?
  Each time before the Effect runs and once more when the component unmounts.

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
