'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.sendFile(path.join(__dirname, '/index.html'));
  res.end();
});

module.exports = app;
module.exports.handler = serverless(app);