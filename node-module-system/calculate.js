import add from './add.js';
import subtract from './subtract.js';
import multiply from './mutliply.js';
import divide from './divide.js';

const calculation = process.argv[3];
const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

const result =
  calculation === 'plus'
    ? add(a, b)
    : calculation === 'minus'
    ? subtract(a, b)
    : calculation === 'over'
    ? divide(a, b)
    : calculation === 'times'
    ? multiply(a, b)
    : undefined;

result === undefined
  ? console.log('invalid operation:', calculation)
  : console.log('result:', result);
