const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// POST /api/register
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  console.log('✅ User Registered:', { name, email, password });
  res.status(200).json({ message: 'User registered successfully' });
});

// Default GET (optional)
app.get('/', (req, res) => {
  res.send('✅ API is working!');
});

app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
