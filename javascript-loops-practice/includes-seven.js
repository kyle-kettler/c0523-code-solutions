/* exported includesSeven */
function includesSeven(array) {
  let sevenChecker = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenChecker = true;
    }
  }
  return sevenChecker;
}
