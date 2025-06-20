const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/klanten', (req, res) => {
  res.json([{ naam: 'Janssen BV' }, { naam: 'KlimCo' }]);
});

app.get('/api/installaties', (req, res) => {
  res.json([{ locatie: 'Amsterdam', datum: '2024-06-20' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));