const { json } = require('express');
const express = require('express')
const contactRouter = express.Router()
const nodemailer = require('nodemailer')

//Contact form route
const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.acc_EMAIL,
        pass: process.env.acc_PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);
    transporter.verify((error, sucess) => {
        if(error) {
           console.log(error)
        } else {
            console.log("Contact form is all good!");
        }
    });

contactRouter.post('/', (req,res, next) => {
    const mail = {
        From: process.env.acc_EMAIL,
        to: 'iwanjones41299@gmail.com',
        subject: req.body.subject,
        text: `
        from:
        ${req.body.name}
        contact: 
        ${req.body.email}
        message:
        ${req.body.text}
        `
    }
    transporter.sendMail(mail, (err,data) => {
        if(err){
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'sucess'
            })
        }
    });
});

module.exports = contactRouter;