const { json } = require('express');
const express = require('express')
const contactRouter = express.Router()
const nodemailer = require('nodemailer')

//Contact form route
const transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
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
            console.log(sucess);
        }
    });

contactRouter.post('/', (req,res, next) => {
    const mail = {
        From: process.env.acc_EMAIL,
        to: 'shoppinghut2021@gmail.com',
        subject: req.body.subject,
        text: `
        From:
        ${req.body.name}
        Contact information: 
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