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