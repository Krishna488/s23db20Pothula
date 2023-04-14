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
// Handle Jug create on POST.
// for a specific Jug.
exports.Jug_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Jug.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Jug delete form on DELETE.
exports.Jug_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Jug delete DELETE ' + req.params.id);
};
//  Handle Jug update form on PUT.
exports.Jug_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Jug.findById( req.params.id)
    // Do updates of properties
    if(req.body.Jug_type)
    toUpdate.Jug_type = req.body.Jug_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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
    