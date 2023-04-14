const mongoose = require("mongoose")
const JugSchema = mongoose.Schema({
Jug_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Jug",
JugSchema)