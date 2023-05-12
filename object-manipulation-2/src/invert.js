/* exported invert */
function invert(source) {
  const object = {};
  for (const key in source) {
    const value = source[key];
    const prop = key;
    console.log(value, prop);
    object[value] = prop;
  }
  return object;
}
