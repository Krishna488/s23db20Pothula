 const mongoose = require("mongoose")
const JugSchema = mongoose.Schema({
 Jug: {type: String, minlength: 1, maxlength:30},
 size: {type: String, minlength: 1, maxlength:30},
 cost: {type: Number, min: 10, maxlength:15000}
})    
module.exports = mongoose.model("Jug",JugSchema)
var express = require('express');
const Jug_controlers= require('../controllers/Jug');
var router = express.Router();

/* GET users listing. 
class Jug{
    constructor(Jug_type, Jug_name, Jug_cost){
        this.Jug_type=Jug_type;
        this.Jug_name=Jug_name;
        this.Jug_cost=Jug_cost;
    }
}

/* GET home page. 
router.get('/', function(req, res, next) {
    let s1= new Jug('Knee-high','Jug',6000);
    let s2= new Jug('Earth shoe','Adidas',4000);
    let s3= new Jug('Flip-flops','Reebok',5000);
  res.render('Jug', { title: 'Search Results Jug',Jug: [s1,s2,s3] });
});*/
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
router.get('/', Jug_controlers.Jug_view_all_Page );
router.get('/detail', secured,Jug_controlers.Jug_view_one_Page);
router.get('/create', secured,Jug_controlers.Jug_create_Page);
//router.get('/update', Jug_controlers.Jug_update_Page);
router.get('/delete', secured,Jug_controlers.Jug_delete_Page);
module.exports = router;

/* GET update costume page */
    
router.get('/update', secured,Jug_controlers.Jug_update_Page);