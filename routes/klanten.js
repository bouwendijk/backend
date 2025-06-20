const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, naam: 'Jan Jansen' },
    { id: 2, naam: 'Kees de Vries' },
  ]);
});

module.exports = router;
