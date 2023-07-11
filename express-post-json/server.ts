import express from 'express';

type Grade = { id: number; name: string; course: string; score: number };
type Grades = Record<number, Grade>;

let id = 1;

const grades: Grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArr = [];
  for (const key in grades) {
    gradeArr.push(grades[key]);
  }
  res.json(gradeArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = id;
  const newGrade = req.body;
  grades[id] = newGrade;
  id++;
  res.sendStatus(201);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
