/* exported omit */
function omit(source, keys) {
  const object = {};
  const propArr = [];
  const valueArr = [];

  for (const key in source) {
    propArr.push(key);
    valueArr.push(source[key]);
  }

  for (let i = 0; i < propArr.length; i++) {
    if (propArr[i] !== keys[i] && keys[i] !== undefined) {
      object[propArr[i]] = valueArr[i];
    }
  }
  return object;
}
