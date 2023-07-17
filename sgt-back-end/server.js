import express from 'express';
import pg from 'pg';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { course, name, score } = req.body;
    // Convert score to a number
    const scoreNum = Number(score);
    // Check to make sure all fields are present
    if (course === undefined) {
      throw new ClientError(400, '"course" is a required field');
    }
    if (name === undefined) {
      throw new ClientError(400, '"name" is a required field');
    }
    if (scoreNum === undefined) {
      throw new ClientError(400, '"score" is a required field');
    }
    // Check to see if scoreNum is an int and greater or equal to 0
    if (!Number.isInteger(scoreNum) || scoreNum <= 0) {
      throw new ClientError(400, '"score" must be a positive integer');
    }
    // Checks successful so create new row in db
    const sql = `
      insert into "grades" ("course", "name", "score")
        values ($1, $2, $3)
        returning *
    `;
    const params = [course, name, scoreNum];
    const result = await db.query(sql, params);
    const newEntry = result.rows[0];
    // Send status to client alog with created row
    res.status(201).json(newEntry);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { course, name, score } = req.body;
    // Convert score to a number
    const scoreNum = Number(score);
    // Convert gradeId to a number and save it in a variable
    const gradeId = Number(req.params.gradeId);
    // Check if gradeId is an int and is greater than or equal to 0
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Check for all required fields
    if (course === undefined) {
      throw new ClientError(400, '"course" is a required field');
    }
    if (name === undefined) {
      throw new ClientError(400, '"name" is a required field');
    }
    if (scoreNum === undefined) {
      throw new ClientError(400, '"score" is a required field');
    }
    // Check if scoreNum is an int and is greater than or equal to 0
    if (!Number.isInteger(scoreNum) || scoreNum <= 0) {
      throw new ClientError(400, '"score" must be a positive integer');
    }
    // Checks successful so update row with matching gradeId in db
    const sql = `
      update "grades"
         set "course" = $1,
             "name" = $2,
             "score" = $3
       where "gradeId" = $4
    returning *;
    `;
    const params = [course, name, scoreNum, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (updatedGrade) {
      // Send status to client alog with updated row
      res.status(200).json(updatedGrade);
    } else {
      // Check if gradeId exists in db
      throw new ClientError(404, `cannot find grade with "gradeId" ${gradeId}`);
    }
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    // Check if gradeId is an int and is greater than or equal to 0
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Checks passed then delete row with matching gradeId
    const sql = `
      delete
        from "grades"
       where "gradeId" = $1
       returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (deletedGrade) {
      // Send deleted status
      res.sendStatus(204);
    } else {
      // gradeId does not match any row in db
      throw new ClientError(404, `cannot find grade with "gradeId" ${gradeId}`);
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
