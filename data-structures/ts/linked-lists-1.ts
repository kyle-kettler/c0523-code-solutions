/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function getHead<T>(list: LinkedList<T>): T | null {
  return list.data;
}

export function updateHead<T>(list: LinkedList<T>, value: T | null): void {
  list.data = value;
}

export function withoutHead<T>(list: LinkedList<T>): LinkedList<T> | null {
  const decapitated = list.next
  return decapitated;
}

export function prepend<T>(list: LinkedList<T>, value: T): LinkedList<T> {
  const output = new LinkedList(value)
  output.next = list
  return output;
}
