import { readFile } from 'node:fs/promises';

async function readAny(file) {
  try {
    const filePath = './' + file;
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (e) {
    console.log('there was an error', e);
  }
}

readAny(process.argv[2]);
