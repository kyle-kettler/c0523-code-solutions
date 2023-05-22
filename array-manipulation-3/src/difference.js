/* exported difference */
function difference(first, second) {
  const difference = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      difference.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      difference.push(second[i]);
    }
  }

  return difference;
}
