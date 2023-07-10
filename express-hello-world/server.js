import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('request type', req.method);
  res.send('<p>Hello, world!<p>');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
