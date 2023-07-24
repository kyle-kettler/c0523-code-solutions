import Stack from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0
  while (stack.peek() !== undefined) {
    count++
    stack.pop()
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = -Infinity
  while (stack.peek() !== undefined) {
    let current = stack.pop()
    if (current && current > max) {
      max = current
    }
  }
  return max;
}
