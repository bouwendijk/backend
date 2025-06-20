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
