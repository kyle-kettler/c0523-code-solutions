/* exported truncate */
function truncate(length, string) {
  const truncated = string.slice(0, length) + '...';
  return truncated;
}
