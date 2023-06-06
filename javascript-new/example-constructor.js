function ExampleConstructor() {}
console.log('protype of ExampleConstructor', ExampleConstructor.prototype);
console.log(
  'typeof protype of ExampleConstructor',
  typeof ExampleConstructor.prototype
);

const newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor', newExampleConstructor);

const instanceOfExampleConstructor =
  newExampleConstructor instanceof ExampleConstructor;
console.log('instanceof ExampleConstructor', instanceOfExampleConstructor);
