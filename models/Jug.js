const mongoose = require("mongoose")
const JugSchema = mongoose.Schema({
Jug: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Jug",
JugSchema)