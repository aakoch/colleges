import 'dotenv/config.js' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'

import pg from 'pg'
const Client = pg.Client

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})
client.connect(function (err) {
  if (err) throw err;

  const PORT = process.env.PORT || 3001;

  const app = express();

  app.get("/colleges", (req, res) => {

    client.query('SELECT * from colleges')
      .then(rs => res.json(rs.rows))
  });

  app.get("/colleges/:id", (req, res) => {

    client.query('SELECT * from colleges where id = $1', [req.params.id])
      .then(rs => res.send(rs.rows))
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});