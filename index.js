const express = require('express');
const cors = require('cors');
require('dotenv').config();

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
