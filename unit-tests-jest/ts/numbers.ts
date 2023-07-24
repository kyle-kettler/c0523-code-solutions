/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  const fixed = amount.toFixed(2);
  return `$${fixed}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const divided = [];
  for (let i = 0; i < numbers.length; i++) {
    divided.push(numbers[i] / divisor);
  }
  return divided;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== 'number') {
      obj[key] = value;
    } else {
      obj[key] = Number(value) * multiplier;
    }
  });
  return obj;
}
