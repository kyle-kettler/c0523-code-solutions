/* exported pick */
function pick(source, keys) {
  const object = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === key && source[keys[i]] !== undefined) {
        object[keys[i]] = source[keys[i]];
      }
    }
  }
  return object;
}
