const connect = require('connect');
// Custom middleware function
const customMiddleware = (req, res, next) => {
  console.log('This is a custom middleware');
  next();
};
// Access control middleware
const accessControlMiddleware = (req, res, next) => {
  const { token } = req.headers;
  if (token === 'secretToken') {
    next();
  } else {
    res.statusCode = 401;
    res.end('Unauthorized');
  }
};
// Create a Connect app
const app = connect();
// Use custom middleware
app.use(customMiddleware);
// Use access control middleware
app.use(accessControlMiddleware);
// Handle incoming requests
app.use((req, res) => {
  res.end('Hello from Connect!');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Connect server is running on port ${3000}`);
});
