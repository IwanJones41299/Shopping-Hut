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

app.listen(5000, () => {
    console.log('express server started');
});