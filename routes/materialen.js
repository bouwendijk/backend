const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, naam: 'PVC buis 20mm' },
    { id: 2, naam: 'Koppeling 16mm' },
  ]);
});

module.exports = router;
