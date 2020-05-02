const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource and do something else or not');
});

module.exports = router;
