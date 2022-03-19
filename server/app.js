const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
module.exports = app;

app.use(morgan(dev));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use('/api', require('/api'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
