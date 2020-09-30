const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser);
app.use(express.json);

mongoose.connect('mongodb://localhost:27017/shopping-hut', {useNewUrlParser : true, useUnifiedTopology: true}, () => {
    console.log('db connected');
});

const User = require('./models/userModel');

const userInput = {
    name : "Iwan Jones",
    username : "IwanJones412",
    email : "iwanjones41299@gmail.com",
    password : "testpassword123"
}

const user = new User(userInput);
user.save((err, document) => {
    if(err)
        console.log(err);
    console.log(document);
});

app.listen(5000, () => {
    console.log('express server started');
});