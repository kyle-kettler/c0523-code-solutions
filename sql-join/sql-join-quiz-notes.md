# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A primary key from one table that appears in another table to connect the two tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  With the `join` clause followed by the name of the table you are connecting and the `using` clause with the connecting column name in parantheses.
  `join "films" using ("filmId")`

- How do you temporarily rename columns or tables in a SQL statement?
  With the `as` clause in between the original name and the temporary name of the table.

- How do you create a one-to-many relationship between two tables?
  By using the `join` clause and connecting the two table by the shared column.

- How do you create a many-to-many relationship between two tables?
  By creating a 3rd "join table" that includes columns for primary keys for each table that needs to be connected.

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
