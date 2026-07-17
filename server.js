const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

if (isProd) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
