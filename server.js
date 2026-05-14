const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Running');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(JSON.stringify({ level: 'info', msg: `Server running on port ${PORT}`, ts: new Date().toISOString() }));
  });
}

module.exports = app;
