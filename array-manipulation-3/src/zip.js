/* exported zip */
function zip(first, second) {
  const shorter = Math.min(first.length, second.length);
  const zipped = [];

  for (let i = 0; i < shorter; i++) {
    const chunk = [];
    chunk.push(first[i]);
    chunk.push(second[i]);
    zipped.push(chunk);
  }

  return zipped;
}
