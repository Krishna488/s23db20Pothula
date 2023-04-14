var Jug = require('../models/Jug');
// List of all Jug

// List of all Jug
exports.Jug_list = async function(req, res) {
    try{
    theJug = await Jug.find();
    res.send(theJug);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    //List of all Jug
    exports.Jug_list = async function(req, res) {
    try{
    theJug = await Jug.find();
    res.send(theJug);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
    
// for a specific Jug.
exports.Jug_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Jug detail: ' + req.params.id);
};
// Handle Jug create on POST.
exports.Jug_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Jug create POST');
};
// Handle Jug delete form on DELETE.
exports.Jug_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jug delete DELETE ' + req.params.id);
};
// Handle Jug update form on PUT.
exports.Jug_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jug update PUT' + req.params.id);
};