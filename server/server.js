const express = require('express');
const app = express();
require('dotenv').config()
const connect = require('./config/connection')
const port = process.env.PORT
const todoRouter = require('./routes/todoRoute');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');

// middlewares
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(morgan('dev'))
app.use(cors())

app.use('/api/todos', todoRouter)


app.use(errorHandler)

connect().then(() => {
    app.listen(port, () => console.log("Server listening on port ", port))
})
