/* exported findIndex */
function findIndex(array, value) {
  let valueReturn = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueReturn = i;
      break;
    }
  }
  return valueReturn;
}
