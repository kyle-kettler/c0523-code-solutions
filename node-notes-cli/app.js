import { readFile, writeFile } from 'node:fs/promises';

const data = await JSON.parse(await readFile('data.json'));
const [, , operation, ...args] = process.argv;

function runApp(operation, args) {
  switch (operation) {
    case 'read':
      readNotes(data);
      break;
    case 'create':
      createNote(data, args);
      break;
    case 'update':
      updateNote(data, args);
      break;
    case 'delete':
      deleteNote(data, args);
      break;
  }
}

async function readNotes(data) {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
}

async function createNote(data, args) {
  const note = args[0];
  const noteId = data.nextId;
  data.notes[noteId] = note;
  data.nextId++;
  const dataJSON = JSON.stringify(data, null, 2);
  await writeFile('data.json', dataJSON);
}

async function updateNote(data, args) {
  for (const key in data.notes) {
    if (key === args[0]) {
      data.notes[key] = args[1];
    }
  }
  const dataJSON = JSON.stringify(data, null, 2);
  await writeFile('data.json', dataJSON);
}

async function deleteNote(data, args) {
  delete data.notes[args[0]];
  const dataJSON = JSON.stringify(data, null, 2);
  await writeFile('data.json', dataJSON);
}

try {
  runApp(operation, args);
} catch (err) {
  console.log('there was an error', err);
}
