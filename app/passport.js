const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy; 
const User = require('./models/userModel');


const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

//Authorization for protecting resources
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "ShoppingHut"
}, (payload, done) => {
    User.findById({_id : payload.sub}, (err, user) => {
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else
            return done(null, false)
    });
}));

//Authentication using username & password
passport.use(new localStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        //error signing in
        if(err)
            return done(err)
        //if no user exist
        if(!user)
            return done(null, false);
        // check if password that has been entered is correct
        user.comparePassword(password, done);


    });
}));