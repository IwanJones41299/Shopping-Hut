const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
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

//Forgotten Password
userRouter.post('/forgotPassword', (req, res) => {
    if(req.body.email === ''){
        res.status(400).send('emai required');
    }
    console.error(req.body.email);
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if (user === null) {
            console.error('email not in db');
            res.status(403).send('email not in db');
        }else {
            const token = crypto.randomBytes(32).toString('hex');
            user.update({
                resetToken : token, 
                expireToken : Date.now + 900000,
            });

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                        user: process.env.acc_EMAIL,
                        pass: process.env.acc_PASSWORD
                },
            });

            const mailOptions = {
                from : 'iwanjones41299@gmail.com',
                to: `${user.email}`,
                subject: 'Password reset link',
                text: `Password reset email
                    click the following <a href="http://localhost:3000/reset/${token}></a>
                `
            };
            console.log('sending email');

            transporter.sendMail(mailOptions, (err, response) => {
                if(err){
                    console.error('there was an error', err);
                } else{
                    console.log('here is the res', response);
                    res.status(200).json('recovery email sent');
                }
            });
        }
    });
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

//View single product
userRouter.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    List.findById(id, (err, list) => {
        res.json(list);
    })
});

//Edit single product
userRouter.post('/update/:id', function(req, res){
    List.findById(req.params.id, function(err, list){
        if(!list)
            res.status(500).json({message : {msgBody : "Error, item not added", msgError: true}});
        else
            list.name = req.body.name;
            list.quantity = req.body.quantity;
            list.user = req.body.user;

            list.save().then(list => {
                res.json("Item updated");
            })
            .catch(err => {
                res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
            })
    })
});

//Delete button route

//Authentication
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}), (req, res) => {
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});

module.exports = userRouter;