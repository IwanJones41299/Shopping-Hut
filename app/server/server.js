const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()

require('dotenv').config({
    path: './config/config.env'
})

connectDB()

app.use(bodyparser.json())

if(process.env.NODE_ENV === 'dev'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

const authRouter = require('./routes/authRoute')
const bodyParser = require('body-parser')

app.use('/api/', authRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    })
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});