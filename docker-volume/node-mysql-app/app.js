const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) throw err;
    res.send(`🚀 Connected to MySQL! Current time: ${results[0].time}`);
  });
});

app.listen(3000, () => console.log('App running on port 3000'));
