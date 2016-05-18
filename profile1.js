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

app.get('/newUser', function (req, res) {
  var username = req.query.username || '';
  var password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || users.username) {
    return res.sendStatus(400);
  }

  var salt = crypto.randomBytes(128).toString('base64');
  var hash = crypto.pbkdf2Sync(password, salt, 10000, 512);

  users[username] = {
    salt: salt,
    hash: hash
  };

  res.sendStatus(200);
});

app.get('/auth', function (req, res) {
  var username = req.query.username || '';
  var password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    return res.sendStatus(400);
  }

  var hash = crypto.pbkdf2Sync(password, users[username].salt, 10000, 512);

  if (users[username].hash.toString() === hash.toString()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, IP);
console.log('Running on http://' + IP + ':' + PORT);
