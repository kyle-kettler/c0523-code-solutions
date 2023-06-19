const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

const { title: book1Title, author: book1Author, libraryID: book1ID } = book1;

console.log(
  `The title of the book is ${book1Title}, the author is ${book1Author}, and the library id is ${book1ID}`
);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};

const { title: book2Title, author: book2Author, libraryID: book2ID } = book2;

console.log(
  `The title of the book is ${book2Title}, the author is ${book2Author}, and the library id is ${book2ID}`
);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;

console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

const [, , , book6] = library;

console.log('book6:', book6);
