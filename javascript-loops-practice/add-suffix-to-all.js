/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const suffixy = [];
  for (let i = 0; i < words.length; i++) {
    suffixy.push(words[i].concat(suffix));
  }
  return suffixy;
}
