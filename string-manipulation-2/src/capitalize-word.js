/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
