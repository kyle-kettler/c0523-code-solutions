const student = {
  firstName: 'Kyle',
  lastName: 'Kettler',
  age: 31,
};
const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Web Designer';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Toyota',
  model: '4runner',
  year: '2023',
};
vehicle['color'] = 'sand';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Wally',
  type: 'Dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
