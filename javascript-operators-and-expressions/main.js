const width = 32;
const height = 12;
const area = width * height;

console.log('value of area: ', area);
console.log('typeof area: ', typeof area);

const bill = 89.75;
const payment = 100;
const change = payment - bill;

console.log('value of change: ', change);
console.log('typeof change: ', typeof change);

const quizzes = 78;
const midterm = 98;
const final = 92;
const grade = (quizzes + midterm + final) / 3;

console.log('value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName = 'Kyle';
const lastName = 'Kettler';
const fullName = firstName + ' ' + lastName;

console.log('value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH = 5;
const isAcidic = pH < 7;

console.log('value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount = 288;
const isSparta = headCount === 300;

console.log('value of isSparta: ', isSparta);
console.log('typeof isSparta', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';

console.log('value of motto: ', motto);
console.log('typeof motto: ', typeof motto);
