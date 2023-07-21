import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import ClientError from './lib/client-error.js';
import errorMiddleware from './lib/error-middleware.js';
import uploadsMiddleware from './lib/uploads-middleware.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post(
  '/api/uploads',
  uploadsMiddleware.single('image'),
  async (req, res, next) => {
    try {
      if (!req.file) throw new ClientError(400, 'no file field in request');
      const { caption } = req.body;
      if (!caption) {
        throw new ClientError(400, 'caption is a required field');
      }
      const imgUrl = `/images/${req.file.filename}`;
      const sql = `
        insert into "images" ("url", "caption")
        values ($1, $2)
        returning *;
      `;
      const params = [imgUrl, caption];
      const result = await db.query(sql, params);
      const [img] = result.rows;
      res.status(201).json(img);
    } catch (err) {
      next(err);
    }
  }
);

app.get('/api/images', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "images"
      `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
