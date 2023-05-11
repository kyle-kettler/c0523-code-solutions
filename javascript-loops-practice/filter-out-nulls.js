/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredValues.push(values[i]);
    }
  }
  return filteredValues;
}
