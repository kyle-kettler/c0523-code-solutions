import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

type Note = { id: number; content: string };
type Notes = Record<number, Note>;
type Data = { nextId: number; notes: Notes };

const app = express();

app.use(express.json());

// Handles GET request for all notes.
app.get('/api/notes', async (req, res) => {
  try {
    const data = await JSON.parse(await readFile('data.json', 'utf8'));
    const notes: Notes = data.notes;
    const notesArr = [];
    for (const key in notes) {
      notesArr.push(notes[key]);
    }
    res.json(notesArr);
  } catch (err) {
    console.log('There was an error:', err);
  }
});

// Handles GET request for a sigle note, found by the id url parameter.
// It will handle errors if entered id is not in data and if it is NaN.
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data: Data = await JSON.parse(await readFile('data.json', 'utf8'));
    const notes: Notes = data.notes;
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID must be a positive integer' });
      return;
    }
    if (!notes[id]) {
      res.status(404).json({ error: 'No note with id ' + id + ' found' });
      return;
    }
    res.json(notes[id]);
  } catch (err) {
    console.log('There was an error:', err);
  }
});

// Handle POST request for new note in JSON format.
// It will handle errors if the user does not include a 'content' field and server errors.
app.post('/api/notes', async (req, res) => {
  try {
    const data: Data = await JSON.parse(await readFile('data.json', 'utf8'));
    const notes: Notes = data.notes;
    const newNote = req.body;
    if (!newNote.content) {
      res.status(400).json({ error: "A 'content' field is required" });
      return;
    }
    const id = data.nextId++;
    newNote.id = id;
    notes[id] = newNote;
    const dataJSON = JSON.stringify(data, null, 2);
    await writeFile('data.json', dataJSON);
    res.status(201).json(newNote);
  } catch (err) {
    console.error('There was an error:', err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

// Handle delete request by removing the note at id specified.
// Error handling if id is NaN or a note at id does not exist.
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data: Data = await JSON.parse(await readFile('data.json', 'utf8'));
    const notes: Notes = data.notes;
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID must be a positive integer' });
      return;
    }
    if (!notes[id]) {
      res.status(404).json({ error: 'No note with id ' + id + ' found' });
      return;
    }
    delete notes[id];
    const dataJSON = JSON.stringify(data, null, 2);
    await writeFile('data.json', dataJSON);
    res.sendStatus(204);
  } catch (err) {
    console.error('There was an error:', err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

// Handle put request by finding note matching id and updating content to the inputed text.
// Handle errors for id is NaN, content field is not included, note matching id doesn't exist, server error.
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data: Data = await JSON.parse(await readFile('data.json', 'utf8'));
    const notes: Notes = data.notes;
    const id = Number(req.params.id);
    const newNote = req.body;
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID must be a positive integer' });
      return;
    }
    if (!newNote.content) {
      res.status(400).json({ error: "A 'content' field is required" });
      return;
    }
    if (!notes[id]) {
      res.status(404).json({ error: 'No note with id ' + id + ' found' });
      return;
    }
    for (const key in data.notes) {
      if (Number(key) === id) {
        newNote.id = id;
        data.notes[key] = newNote;
      }
    }
    const dataJSON = JSON.stringify(data, null, 2);
    await writeFile('data.json', dataJSON);
    res.status(201).json(newNote);
  } catch (err) {
    console.error('There was an error:', err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
