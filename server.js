import express from 'express'

const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // send html which says Hello, this is Node.js Dockerized App
  res.send('<h1>Hello, this is Node.js Dockerized App</h1>');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
