# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete

- How do you add a row to a SQL table?
  With the `insert` keyword

- How do you add multiple rows to a SQL table at once?
  By specifying more than one tuple of values, separated by commas.

- How do you update rows in a database table?
  With the `update` keyword.

- How do you delete rows from a database table?
  With the `delete` keyword

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Because without a `where` clause you will be effecting every row in the table.

- How do you accidentally delete or update all rows in a table?
  Leaving out the `where` clause.

- How do you get back the modified row without a separate `select` statement?
  By including the `returning` clause at the end. A \* will return the entire row or you can specify the column names you want returned.

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
