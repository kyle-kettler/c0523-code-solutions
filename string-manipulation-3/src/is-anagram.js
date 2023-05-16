/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const firstArr = firstString.split(' ').join('').split('').sort();
  const secondArr = secondString.split(' ').join('').split('').sort();
  let check = true;
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      check = false;
      break;
    }
  }
  return check;
}
