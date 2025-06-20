const express = require('express');
const router = express.Router();
const Materiaal = require('../models/Materiaal');

router.get('/', async (req, res) => {
  try {
    const materialen = await Materiaal.find();
    res.json(materialen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Serverfout' });
  }
});

module.exports = router;
