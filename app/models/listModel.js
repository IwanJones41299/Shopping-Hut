const mongoose = require('mongoose');


const shoppingList = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('List', shoppingList);