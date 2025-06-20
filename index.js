const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Verbonden met MongoDB'))
.catch((err) => console.error('❌ Verbindingsfout:', err));

const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// 👇 Voeg deze route toe
app.get('/', (req, res) => {
  res.send('API is live!');
});

app.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
});
const Materiaal = require('./models/Materiaal');

// Route om materialen op te halen
app.get('/api/materialen', async (req, res) => {
  try {
    const materialen = await Materiaal.find();
    res.json(materialen);
  } catch (err) {
    res.status(500).json({ error: 'Serverfout' });
  }
});

// Route om materiaal toe te voegen
app.post('/api/materialen', express.json(), async (req, res) => {
  const nieuwMateriaal = new Materiaal(req.body);
  try {
    const opgeslagen = await nieuwMateriaal.save();
    res.status(201).json(opgeslagen);
  } catch (err) {
    res.status(400).json({ error: 'Fout bij opslaan' });
  }
});
