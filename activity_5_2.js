

/*
assign a task : implement a server that response differntly based on request types

*/ 



// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Route for GET requests
app.get('/', (req, res) => {
  res.send('This is a GET request!');
});

// Route for POST requests
app.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'This is a POST request!', data });
});

// Route for PUT requests
app.put('/', (req, res) => {
  res.send('This is a PUT request!');
});

// Route for DELETE requests
app.delete('/', (req, res) => {
  res.send('This is a DELETE request!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});
