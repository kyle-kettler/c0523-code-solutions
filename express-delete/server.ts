import express from 'express';

type Grade = { id: number; name: string; course: string; score: number };
type Grades = Record<number, Grade>;

const grades: Grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArr = [];
  for (const key in grades) {
    gradeArr.push(grades[key]);
  }
  res.json(gradeArr);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (grades[id]) {
    delete grades[id];
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
