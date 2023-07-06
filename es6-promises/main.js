import takeAChance from './take-a-chance.js';

const promiseExample = takeAChance('Kyle');

promiseExample
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
