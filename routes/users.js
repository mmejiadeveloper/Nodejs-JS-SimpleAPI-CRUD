const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

module.exports = router;
