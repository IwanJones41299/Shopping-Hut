const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.user_email,
        password: process.env.PASSWORD
    }
});

module.exports = transporter;