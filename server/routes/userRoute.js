const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const JWT = require('jsonwebtoken');
const User = require('../models/userModel');
const FruitVegItem = require('../models/fruitVeg');
const FreshFoodItem = require('../models/freshFood');
const FrozenFoodItem = require('../models/frozenFood');
const BakeryItem = require('../models/bakery');
const DriedFoodItem = require('../models/driedFood');
const DrinksConfectionaryItem = require('../models/drinksConfectonary');
const ToiletriesCleaningItem = require('../models/toiletriesCleaning');
const PetItem = require('../models/pets');

const signtoken = userID => {
    return JWT.sign({
        iss : "C55284D857062C50C092630AD4924E5DE000BE9BDBE63E5EA650B11621531417",
        sub : userID
    },"C55284D857062C50C092630AD4924E5DE000BE9BDBE63E5EA650B11621531417",{expiresIn : "35m"});
}

//Register a user
userRouter.post('/register', (req,res) => {
    const { name,username,email,accountRole,password } = req.body;
    User.findOne({name,username,email,accountRole}, (err, user) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username has been taken already", msgError: true}});
        else{
            const newUser = new User({name,username,email,accountRole,password});
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
userRouter.post('/login',passport.authenticate('jwt',{session : false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id,username} =req.user;
        const token = signtoken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated : true, user : {username}});
    }
    else if(err){
        res.status(500).json({message : { msgBody : "Incorrect login details", msgError: true}});
    }
});

//Users logout
userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res) => {
    res.clearCookie('access_token');
    res.json({user:{username : ""},sucess :true});
});

//Authentication
userRouter.get('/authenticated', passport.authenticate('jwt',{session : false}), (req, res) => {
    const {username, accountRole} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username, accountRole}});
});

//Shopping list routes = CRUD functions
userRouter.post('/fruitvegItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const fruitveg = new FruitVegItem(req.body);
    fruitveg.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.fruitvegItems.push(fruitveg);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/fruitvegList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('fruitvegItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({fruitvegItems : document.fruitvegItems, authenticated : true});
        }
    });
});


userRouter.route('/deleteFruitVeg/:id').get(function (req, res) {
    FruitVegItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});


userRouter.post('/freshfoodItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const freshfood = new FreshFoodItem(req.body);
    freshfood.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.freshfoodItems.push(freshfood);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/freshfoodList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('freshfoodItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({freshfoodItems : document.freshfoodItems, authenticated : true});
        }
    });
});

userRouter.route('/deleteFreshFood/:id').get(function (req, res) {
    FreshFoodItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

userRouter.post('/frozenfoodItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const frozenfood = new FrozenFoodItem(req.body);
    frozenfood.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.frozenfoodItems.push(frozenfood);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});


userRouter.get('/frozenfoodList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('frozenfoodItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({frozenfoodItems : document.frozenfoodItems, authenticated : true});
        }
    });
});

userRouter.route('/deleteFrozenFood/:id').get(function (req, res) {
    FrozenFoodItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});


userRouter.post('/bakeryItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const bakery = new BakeryItem(req.body);
    bakery.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.bakeryItems.push(bakery);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});


userRouter.get('/bakeryList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('bakeryItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({bakeryItems : document.bakeryItems, authenticated : true});
        }
    });
});

userRouter.route('/deleteBakery/:id').get(function (req, res) {
    BakeryItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

userRouter.post('/driedfoodItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const driedfood = new DriedFoodItem(req.body);
    driedfood.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.driedfoodItems.push(driedfood);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/driedfoodList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('driedfoodItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({driedfoodItems : document.driedfoodItems, authenticated : true});
        }
    });
});

userRouter.route('/deleteDriedFoods/:id').get(function (req, res) {
    DriedFoodItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

userRouter.post('/drinksconfectionaryItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const drinksconfectionary = new DrinksConfectionaryItem(req.body);
    drinksconfectionary.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.drinksconfectionaryItems.push(drinksconfectionary);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/drinksconfectionaryList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('drinksconfectionaryItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({drinksconfectionaryItems : document.drinksconfectionaryItems, authenticated : true});
        }
    });
});

userRouter.route('/deleteDrinksConfectionary/:id').get(function (req, res) {
    DrinksConfectionaryItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

userRouter.post('/toiletriescleaningItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const toiletriescleaning = new ToiletriesCleaningItem(req.body);
    toiletriescleaning.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.toiletriescleaningItems.push(toiletriescleaning);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/toiletriescleaningList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('toiletriescleaningItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({toiletriescleaningItems : document.toiletriescleaningItems, authenticated : true});
        }
    });
});

userRouter.route('/deletetoiletriescleaning/:id').get(function (req, res) {
    ToiletriesCleaningItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

userRouter.post('/petItems',passport.authenticate('jwt',{session : false}),(req,res) => {
    const pet = new PetItem(req.body);
    pet.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.petItems.push(pet);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody: "Item added sucessfully", msgError: false}});
            });
        }
    });
});

userRouter.get('/petList',passport.authenticate('jwt',{session : false}),(req,res) => {
    User.findById({_id : req.user._id}).populate('petItems').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else {
            res.status(200).json({petItems : document.petItems, authenticated : true});
        }
    });
});

userRouter.route('/deletePet/:id').get(function (req, res) {
    PetItem.findByIdAndRemove({_id: req.params.id}, function (err, fruitveg) {
        if(err) res.json(err)
        else res.json('Deleted');
    });
});

module.exports = userRouter;