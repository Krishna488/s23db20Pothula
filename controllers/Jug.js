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
// Handle Jug create on POST.
exports.Jug_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jug();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Jug_type":"goat", "cost":12, "size":"large"}
    document.Jug = req.body.Jug;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Jug delete form on DELETE.
exports.Jug_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jug delete DELETE ' + req.params.id);
};
// Handle Jug update form on PUT.
exports.Jug_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Jug update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Jug_view_all_Page = async function(req, res) {
    try{
    theJug = await Jug.find();
    res.render('Jug', { title: 'Jug Search Results', results: theJug });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // / Handle Jug create on POST.
    exports.Jug_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jug();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Jug_type":"goat", "cost":12, "size":"large"}
    document.Jug_type = req.body.Jug_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };