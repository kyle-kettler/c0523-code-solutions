/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 1
  while (list.next !== null) {
    list = list.next
    count++
  }
  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  while (list.next !== null) {
    list = list.next
  }
  list.next = new LinkedList(value);
}

export function getTail<T>(list: LinkedList<T>): T | null {
  while (list.next !== null) {
    list = list.next
  }
  return list.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  if (list.data === value) return true
  do {
    if (list.next !== null) list = list.next
    if (list.data === value) return true
  }
  while (list.next !== null)
  return false;
}
