/* exported union */
function union(first, second) {
  const union = [];

  for (let i = 0; i < first.length; i++) {
    if (union.includes(first[i])) {
      continue;
    } else {
      union.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (union.includes(second[i])) {
      continue;
    } else {
      union.push(second[i]);
    }
  }

  return union;
}
