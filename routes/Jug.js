var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Jug', { title: 'Search Results of Jug' });
});

module.exports = router;