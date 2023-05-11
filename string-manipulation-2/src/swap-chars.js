/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const swapOne = string.charAt(firstIndex);
  const swapTwo = string.charAt(secondIndex);
  const chars = string.split('');

  chars.splice(firstIndex, 1, swapTwo);
  chars.splice(secondIndex, 1, swapOne);

  const swappedChars = chars.join('');

  return swappedChars;
}
