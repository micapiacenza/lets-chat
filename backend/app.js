// RUN APP: nodemon app.js
const express = require('express');
const formidable = require('formidable');
const bodyParse = require('body-parser');
const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// express app instance
const app = express();

// allow files to be hosted into public folder
app.use(express.static(__dirname + './www'));
// middleware function
app.use(bodyParse.json());

// listen for request
app.listen(3000);

// homepage
app.get('/', (req, res) => {
  res.sendFile('./frontend/homepage/homepage.html', { root: __dirname });
});


// account
app.get('/account', (req, res) => {
  res.sendFile('./frontend/account/account.html', { root: __dirname });
});

// login
app.get('/login', (req, res) => {
  res.sendFile('./frontend//login/login.html', { root: __dirname });
});

// Post Form
app.post('/', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req);
  form.on('fileBegin', (name, file) => {
    file.path = path + '/uploads' + file.name;
  });
  form.on('file', (name, file) => {
    console.log('Uploaded: ' + file.name);
  });
  res.send(path + './frontend/homepage/homepage.html');
})


// 404 page
app.use((req, res) => {
  res.sendFile('./frontend/404/404.html', {root: __dirname});
});
