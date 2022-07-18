const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors())
const port = process.env.PORT || 3131;

// sendFile will go here
app.get('/', function(req, res) {
  res.redirect('/index')
});

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);