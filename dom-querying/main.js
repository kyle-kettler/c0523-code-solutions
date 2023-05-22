console.log('Hello, World');

const headingOne = document.querySelector('h1');
console.log('h1', headingOne);
console.dir(headingOne);

const explanation = document.querySelector('#explanation');
console.log('explanation:', explanation);
console.dir(explanation);

const hint = document.querySelector('.hint');
console.log('hint:', hint);
console.dir(hint);

const paragraphs = document.querySelectorAll('p');
console.log('all paragraphs:', paragraphs);

const exampleLink = document.querySelectorAll('.example-link');
console.log('all .example-links:', exampleLink);
