const express = require('express');

const app = express();
const PORT = 1245;

/**
 * Handles GET requests to the root endpoint ("/").
 * Responds with "Hello Holberton School!".
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Express server is listening on http://localhost:${PORT}`);
});

module.exports = app;
