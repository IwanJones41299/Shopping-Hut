const express = require("express");
require ('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/shoppinghut_DB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected to the server -- SH");
  }
);

app.use(cors());

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

app.use('/contact', require('./routes/contactRouter'));

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} -- SH`);
});
