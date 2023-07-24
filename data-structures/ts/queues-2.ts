/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  const front = queue.dequeue();
  if (front !== undefined) queue.enqueue(front);
}

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) return undefined;
  let i = 0;
  while (i <= index) {
    if (i === index) {
      return queue.dequeue()
    }
    const front = queue.dequeue()
    if (front !== undefined) queue.enqueue(front)
    i++
  }
}
