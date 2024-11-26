const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Export the app to ensure compatibility with Jest tests and ESLint.
module.exports = app;

