import express from 'express';

type Grade = { id: number; name: string; course: string; score: number };
type Grades = Record<number, Grade>;

let id = 1;

const grades: Grades = {};

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradeArr: Grade[] = [];
  for (const key in grades) {
    gradeArr.push(grades[key]);
  }
  res.json(gradeArr);
});

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = req.body;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('Incomplete request');
    return;
  }
  req.body.id = id;
  grades[id] = newGrade;
  id++;
  res.sendStatus(201);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
