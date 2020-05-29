const express = require('express');

const app = express();

const fibo = n => n <= 1 ? 1 : fibo(n-1)+fibo(n-2);

app.get('/fibo', (req, res) => {
  // req.headers
  // req.url
  // req.method
  // req.query ~= context.params
  // req.body (cf. "body-parser")
  const input = Number(req.query.n);
  if (isNaN(input) || input < 0) {
    res.status(400).send({ error: 'Invalid input' });
  }
  const output = fibo(input);
  res.send({ input, output });
});

app.get('/fibo/:n([0-9]+)', (req, res) => {
  const input = Number(req.params.n);
  const output = fibo(input);
  res.send({ input, output });
});

app.listen(5000);
