// Tutorial found @ https://www.tutsmake.com/first-crud-node-express-js-mysql-example/
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
