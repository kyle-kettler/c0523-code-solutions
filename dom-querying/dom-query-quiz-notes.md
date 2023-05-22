# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For dedugging purposes, to make sure the code is working the way we expect it to, and to make sure we are targeting the right element.

- What is a "model"?
  a representation of a person or thing or of a proposed structure, typically on a smaller scale than the original.

- Which "document" is being referred to in the phrase Document Object Model?
  Any HTML documnent

- What is the word "object" referring to in the phrase Document Object Model?
  The elements of the HTML document, called objects

- What is a DOM Tree?
  a hierarchical representation of an HTML or XML document.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementById and querySelector

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  So that you use it multiple times without having to right out the full DOM query

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Becasue the browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a string of a valid css selector(s), and returns an Element object representing the first element in the document that matches the specified set of CSS selectors,

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a string of a valid css selector(s), and returns a non-live NodeList containing one Element object for each element that matches at least one of the specified selectors or an empty NodeList in case of no matches.

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
