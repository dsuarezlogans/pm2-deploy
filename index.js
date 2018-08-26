const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.status(200).send('Hello world again!!');
});

const server = require('http').createServer(app);

server.listen(port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});

module.exports = app;
