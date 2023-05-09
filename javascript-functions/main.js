function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

const greetResults = greet('Kyle');
console.log('greetResults', greetResults);

function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResults = getArea(17, 42);
console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}

const getFirstNameResutls = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResults', getFirstNameResutls);

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

const getLastElementResults = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResults:', getLastElementResults);
