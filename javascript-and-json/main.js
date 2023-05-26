const books = [
  { title: 'Dune', author: 'Frank Herbert', isbn: '978-0441172719' },
  { title: 'Dune Messiah', author: 'Frank Herbert', isbn: '978-0593201732' },
  {
    title: 'Children of Dune',
    author: 'Frank Herbert',
    isbn: '978-0593201749',
  },
];

console.log('books value:', books);
console.log('typeof books', typeof books);

const booksStringify = JSON.stringify(books);

console.log('booksStringify:', booksStringify);
console.log('typeof booksStringify:', typeof booksStringify);

const booksManualJSON =
  '[{"title":"Dune","author":"Frank Herbert","isbn":"978-0441172719"},{"title":"Dune Messiah","author":"Frank Herbert","isbn":"978-0593201732"},{"title":"Children of Dune","author":"Frank Herbert","isbn":"978-0593201749"}]';

console.log('booksManualJSON:', booksManualJSON);
console.log('typeof booksManualJSON:', typeof booksManualJSON);

const booksParse = JSON.parse(booksManualJSON);

console.log('booksParse', booksParse);
console.log('typeof booksParse', typeof booksParse);
