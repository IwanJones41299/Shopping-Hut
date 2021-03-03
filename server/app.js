const express = require("express");
require ('dotenv').config();
const path = require('path');
const morgan = require('morgan');
//const nodemailer = require('nodemailer');
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

// Conect to Mongoose Server Atlas
mongoose.connect(process.env.ATLAS_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
  .then(() => {
      app.listen(port, () => { console.log(`Server running on ${port}`); console.log('MongoDB database connection established successfully'); });
  })
  .catch((err) => {
      console.log(err);
  });

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);
app.use('/contact', require('./routes/contactRouter'));

app.use('/user', express.static(path.join(__dirname, '/user')))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')))
}else {
  app.get('/', (req, res) => {
    res.send('Server is running')
  })
}