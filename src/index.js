import 'dotenv/config.js' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express'

import pg from 'pg'
const Client = pg.Client

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});