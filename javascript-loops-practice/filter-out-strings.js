/* exported filterOutStrings */
function filterOutStrings(array) {
  const noStrings = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      noStrings.push(array[i]);
    }
  }
  return noStrings;
}
