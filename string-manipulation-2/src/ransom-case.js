/* exported ransomCase */
function ransomCase(string) {
  let ransomCase = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomCase += string[i].toLowerCase();
    } else {
      ransomCase += string[i].toUpperCase();
    }
  }
  return ransomCase;
}
