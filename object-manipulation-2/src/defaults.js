/* exported defaults */
function defaults(target, source) {
  const targetKeys = Object.keys(target);
  for (const key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
}
