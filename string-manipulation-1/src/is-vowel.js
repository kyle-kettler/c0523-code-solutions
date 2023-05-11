/* exported isVowel */
function isVowel(char) {
  const upperCaseChar = char.toUpperCase();
  if (
    upperCaseChar === 'A' ||
    upperCaseChar === 'E' ||
    upperCaseChar === 'I' ||
    upperCaseChar === 'O' ||
    upperCaseChar === 'U'
  ) {
    return true;
  } else {
    return false;
  }
}
