/* exported reverseWords */
function reverseWords(string) {
  const reversed = [];
  const words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversed.push(reversedWord);
  }
  return reversed.join(' ');
}
