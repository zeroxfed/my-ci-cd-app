const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});

// Start the server only when running this file directly.
// Importing it from Jest will not start a listener.
if (require.main === module) {
  const port = process.env.PORT || 3000;

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}
module.exports = app;
