/* exported isPalindromic */
function isPalindromic(string) {
  const word = string.split(' ').join('');
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}
