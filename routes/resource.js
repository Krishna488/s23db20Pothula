var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Jug_controller = require('../controllers/Jug');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Jug ROUTES ///
// POST request for creating a Jug.
router.post('/Jug', Jug_controller.Jug_create_post);
// DELETE request to delete Jug.
router.delete('/Jug/:id', Jug_controller.Jug_delete);
// PUT request to update Jug.
router.put('/Jug/:id', Jug_controller.Jug_update_put);
// GET request for one Jug.
router.get('/Jug/:id', Jug_controller.Jug_detail);
// GET request for list of all Jug items.
router.get('/Jug', Jug_controller.Jug_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Jug", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};