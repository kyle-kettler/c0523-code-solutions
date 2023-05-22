/* exported flatten */
function flatten(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flat = flat.concat(array[i]);
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}
