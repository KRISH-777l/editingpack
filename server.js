const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy users data (replace with a database in a real app)
const users = [
  { username: 'admin', password: 'password123' },
  { username: 'user', password: 'userpass' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from the current directory

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
