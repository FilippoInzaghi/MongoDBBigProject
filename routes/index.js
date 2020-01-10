const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res) => {
  res.render('index', { title: 'Express', message: 'Dziś ostatni odcinek Watahy' });
});

module.exports = router;
