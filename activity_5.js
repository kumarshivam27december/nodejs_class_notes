/*
assign a task : create a simple nodejs server that process different url paths and query string

*/
// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

app.get('/user', (req, res) => {
  const userId = req.query.id;
  res.send(`User profile page for ID ${userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});



