const mongoose = require('mongoose');

const FruitVegSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    user : {
        type : String,
        required : false
    }
});

module.exports = mongoose.model('FruitVegItem', FruitVegSchema);