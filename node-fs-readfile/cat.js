import { readFile } from 'node:fs/promises';

const files = process.argv.slice(2);

async function cat(files) {
  try {
    const filepaths = files.map(
      async (item) => await readFile('./' + item, { encoding: 'utf8' })
    );
    const promises = await Promise.all(filepaths);
    promises.forEach((e) => console.log(e));
  } catch (e) {
    console.log('there was an error', e);
  }
}

cat(files);
