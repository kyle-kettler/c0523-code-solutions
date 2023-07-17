# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  A promise that resolves to a Response object.

- What is the default request method used by `fetch()`?
  GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  By supplying an `init` object as the second parameter. In that init you can specify the request method with the 'method' key.

- How does `fetch` report errors?
  It sets the `response.ok` property to `false`, then you can use that to throw an error to a catch block.

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
