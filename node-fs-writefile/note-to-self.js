import { writeFile } from 'node:fs/promises';

const note = process.argv[2] + '\n';

async function writeRand() {
  try {
    await writeFile('note.txt', note, 'utf-8');
    console.log('new file created');
  } catch (e) {
    console.error('there was an error', e);
  }
}

writeRand();
