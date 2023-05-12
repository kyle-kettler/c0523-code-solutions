/* exported includes */
function includes(array, value) {
  let valueChecker = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueChecker = true;
    }
  }
  return valueChecker;
}
