const express = require('express');
const fs = require('fs');

const app = express();

app.get('/get_pass', (req, res) => {
    console.log('Request received');
  fs.readFile('pass.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const pass = data.trim().split('\n')[0];

    res.send(pass);
  });
});

app.listen(9090, () => {
  console.log('Server started on http://localhost:9090');
});