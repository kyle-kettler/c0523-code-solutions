/* exported intersection */
function intersection(first, second) {
  const intersection = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersection.push(first[i]);
    } else {
      continue;
    }
  }

  return intersection;
}
