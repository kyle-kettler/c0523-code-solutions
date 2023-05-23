/* exported unique */
function unique(array) {
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    if (unique.includes(array[i])) {
      continue;
    } else {
      unique.push(array[i]);
    }
  }
  return unique;
}
