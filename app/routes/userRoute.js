const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/userModel');
const List = require('../models/listModel');

const signtoken = userID => {
    return JWT.sign({
        iss : "ShoppingHut",
        sub : userID
    },"ShoppingHut",{expiresIn : "1h"});
}

//Register a user
userRouter.post('/register', (req,res) => {
    const { name,username,email,password } = req.body;
    User.findOne({name,username,email}, (err, user) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username has been taken already", msgError: true}});
        else{
            const newUser = new User({name,username,email,password});
            newUser.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfull created", msgError: false}});
            });
        }
    });
});

//User login
userRouter.post('/login',passport.authenticate('local',{session : false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id,username} =req.user;
        const token = signtoken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated : true, user : {username}});
    }
});

//Users logout
userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res) => {
    res.clearCookie('access_token');
    res.json({user:{username : ""},sucess :true});
});

//Shopping list
userRouter.post('/list',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const list = new List(req.body);
    list.save(err=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.lists.push(list);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody : "Successfully added a product to your shoping list", msgError : false}});
            });
        }
    })
});

//Retrieve users shopping list --- (Error here!!!)
userRouter.get('/lists',passport.authenticate('jwt',{session : false}),(req,res)=>{
    User.findById({_id : req.user._id}).populate('lists').exec((err,document)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            res.status(200).json({lists : document.lists, authenticated : true});
        }
    });
});

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}), (req, res) => {
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});



module.exports = userRouter;