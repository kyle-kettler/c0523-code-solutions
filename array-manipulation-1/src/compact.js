/* exported compact */
function compact(array) {
  const compact = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compact.push(array[i]);
    }
  }
  return compact;
}
