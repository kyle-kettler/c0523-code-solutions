/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddOrEven = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEven.push('even');
    } else {
      oddOrEven.push('odd');
    }
  }
  return oddOrEven;
}
