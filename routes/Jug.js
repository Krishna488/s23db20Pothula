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

// GET request for one Jug.
router.get('/Jug/:id', Jug_controlers.Jug_detail);

/* GET detail Jug page */
router.get('/detail', Jug_controlers.Jug_view_one_Page);

/* GET create Jug page */
router.get('/create', Jug_controlers.Jug_create_Page);

/* GET create update page */
router.get('/update', Jug_controlers.Jug_update_Page);

// * GET delete Jug page */
router.get('/delete', Jug_controlers.Jug_delete_Page);