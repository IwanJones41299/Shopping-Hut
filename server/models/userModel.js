const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 6
    },
    username : {
        type : String,
        required : true,
        min : 6,
    },
    email : {
        type : String,
        required : true,
    },
    accountRole : {
        type : String,
        enum : ['Personal', 'Family', 'Admin'],
        required : true
    },
    password : {
        type : String,
        required : true,
        min : 8
    },
    resetToken : String, 
    expireToken : Date,
    fruitvegItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'FruitVegItem'}],
    freshfoodItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'FreshFoodItem'}],
    frozenfoodItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'FrozenFoodItem'}],
    bakeryItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'BakeryItem'}],
    driedfoodItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'DriedFoodItem'}],
    drinksconfectionaryItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'DrinksConfectionaryItem'}],
    toiletriescleaningItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'ToiletriesCleaningItem'}],
    petItems : [{type : mongoose.Schema.Types.ObjectId, ref : 'PetItem'}]
});

UserSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash) => {
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch) => {
        if(err)
            return cb(err)
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);