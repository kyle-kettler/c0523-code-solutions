# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- What is Express middleware useful for?
  Exeecuting code, making changes to the request and response objects, ending the request-response cycle, calling the next middleware function in the stack.

- How do you mount a middleware with an Express application?
  With the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercas

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The request and response objects

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
