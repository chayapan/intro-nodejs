'use strict';

const express = require('express');

// Constants
const IP = '0.0.0.0';
const PORT = 8888;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT, IP);
console.log('Running on http://' + IP + ':' + PORT);
