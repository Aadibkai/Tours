

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   city:{type:String},
   price:{type:Number},
})

module.exports = mongoose.model('data', dataSchema);