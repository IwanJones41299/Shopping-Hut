const express = require("express");
require ('dotenv').config();
const path = require('path');
const morgan = require('morgan');
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

const userRouter = express.static(path.join(__dirname, './routes/userRouter'));
// app.use("/user", userRouter);
app.use('/contact', express.static(path.join(__dirname, './routes/contactRouter')));

app.use('/user', express.static(path.join(__dirname, '/user')))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './build', 'index.html')))
}else {
  app.get('/', (req, res) => {
    res.send('Server is running')
  })
}