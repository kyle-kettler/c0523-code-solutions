import { writeFile } from 'node:fs/promises';

async function writeRand() {
  const random = Math.random() + '\n';
  try {
    await writeFile('random.txt', random, 'utf-8');
  } catch (e) {
    console.error('there was an error', e);
  }
}

writeRand();
