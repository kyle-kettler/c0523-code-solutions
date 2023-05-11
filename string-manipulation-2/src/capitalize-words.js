/* exported capitalizeWords */
function capitalizeWords(string) {
  const wordArray = string.split(' ');
  const capitalizeWords = [];
  for (let i = 0; i < wordArray.length; i++) {
    capitalizeWords.push(
      wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase()
    );
  }
  return capitalizeWords.join(' ');
}
