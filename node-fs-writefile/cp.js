import { readFile, writeFile } from 'node:fs/promises';

const fileToCopy = process.argv[2];
const newFile = process.argv[3];

async function read(file) {
  return await readFile(file);
}

async function copy(fileName, fileContent) {
  await writeFile(fileName, fileContent);
}

try {
  const contents = await read(fileToCopy);
  await copy(newFile, contents);
} catch (e) {
  console.error('there was an error', e);
}
