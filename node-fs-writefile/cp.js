import { readFile, writeFile } from 'node:fs/promises';

const fileToCopy = process.argv[2];
const newFile = process.argv[3];

async function read(file) {
  const contents = await readFile(file, 'utf8');
  return contents;
}

async function copy(fileName, fileContent) {
  await writeFile(fileName, fileContent, 'utf-8');
}

try {
  const contents = await read(fileToCopy);
  await copy(newFile, contents);
} catch (e) {
  console.error('there was an error', e);
}
