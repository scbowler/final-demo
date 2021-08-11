require('dotenv/config');
const express = require('express');
const pg = require('pg');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.get('/api/todos', (req, res, next) => {
  // set by req.user.userId
  const userId = 1;

  const sql = `
    select 
      "todoId",
      "name",
      "details"
    from "todos"
    where "userId" = $1;
  `;
  const params = [userId];

  db.query(sql, params)
    .then(result => {
      const { rows } = result;

      res.json(rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
