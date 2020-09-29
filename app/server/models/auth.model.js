const mongoose = require('mongoose')
const crypto = require('crypto')
const { timeStamp } = require('console')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: String,
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, {timeStamp: true})

userSchema.virtual('password')
    .set(function (password){
        this.password = password
        this.salt = this.makeSalt()
        this.hashedPassword = this.encryptPassword(password)
    })
    .get(function (){
        return this._password
    })

//methods
userSchema.methods = {
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    },
    encryptPassword: function (password) {
        if(!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }catch(err){
            return ''
        }
    },
    authenticate: function(plainPassword){
        return this.encryptPassword(plainPassword) === this.hashedPassword
    }
}

module.exports = mongoose.model('User', userSchema)