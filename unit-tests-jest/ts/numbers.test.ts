import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns an empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns an integer in dollar format', () => {
    const number = 8;
    const result = toDollars(number);
    expect(result).toEqual('$8.00');
  });
  it('returns a float in dollar format rounded to two decimals', () => {
    const number = 8.988888;
    const result = toDollars(number);
    expect(result).toEqual('$8.99');
  });
});

describe('divideBy', () => {
  it('retuns new array of number divided by divisor', () => {
    const numbers = [4, 10, 20];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2, 5, 10]);
  });
  it('returns an empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('multiplyBy', () => {
  it('returns modified object with value multiplied by multiplier', () => {
    const obj = { test: 4 };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ test: 12 });
  });
  it('returns original object if value is NaN', () => {
    const obj = { test: 'test' };
    const multiplier = 3;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ test: 'test' });
  });
});
