/* exported equal */
function equal(first, second) {
  const stringOne = first.toString();
  const stringTwo = second.toString();
  let check = true;
  for (let i = 0; i < first.length; i++) {
    if (typeof first[i] === 'object') {
      if (first[i] !== second[i]) {
        check = false;
        break;
      }
    }
  }
  if (stringOne !== stringTwo) {
    check = false;
  }
  return check;
}
