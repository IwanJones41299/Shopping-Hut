const mongoose = require('mongoose');

const shoppingList = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('List', shoppingList);