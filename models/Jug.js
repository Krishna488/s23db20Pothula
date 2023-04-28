const mongoose = require("mongoose")
const JugSchema = mongoose.Schema({
 Jug: {type: String, minlength: 1, maxlength:30},
 size: {type: String, minlength: 1, maxlength:30},
 cost: {type: Number, min: 10, maxlength:15000}
})    
module.exports = mongoose.model("Jug",JugSchema)