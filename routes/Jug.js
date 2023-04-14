var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Jug', { title: 'Search Results of Jug' });
});

module.exports = router;


var express = require('express');
const Jug_controlers= require('../controllers/Jug');
var router = express.Router();
/* GET Jug */
router.get('/', Jug_controlers.Jug_view_all_Page );
module.exports = router;