const path = require('path');
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const transporter = require("./config");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/shoppinghut_DB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("db connected");
  }
);

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));


app.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.user_email,
      subject: req.body.subject,
      html: `
            <p>You have a new message</p>
            <h3>Contact detials</h3>
            <ul>
                <li>Name : ${req.body.name}</li>
                <li>Email : ${req.body.email}</li>
                <li>Subject : ${req.body.subject}</li>
                <li>Message : ${req.body.message}</li>
            </ul>
            `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          sucess: false,
          message: "Something went wrong",
        });
      } else {
        res.send({
          sucess: true,
          message:
            "Thanks for your message, we will get back to you as soon as we can",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      sucess: false,
      message: "Something went wrong",
    });
  }
});

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("express server started");
});
