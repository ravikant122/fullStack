const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000
const privateJWTString = 'adafsaf'

app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log('created a server using express, listening on 3000')
})