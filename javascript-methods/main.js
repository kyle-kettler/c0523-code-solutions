// The Math Object
const x = 2;
const y = 6;
const z = 4;

const maximumValue = Math.max(x, y, z);
console.log('value of maximuValue:', maximumValue);

const heroes = ['Batman', 'Superman', 'Spiderman', 'Hulk'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('value of random index:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of random hero:', randomHero);

// Array Methods
const library = [
  {
    title: 'Children of Dune',
    author: 'Frank Herbert',
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housell',
  },
];

const lastBook = library.pop();
console.log('value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('new value of library:', library);

// String Methods
const fullName = 'Kyle Kettler';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
