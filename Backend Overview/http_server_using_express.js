const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json()) // now express instance(app) can parse body of req object

const port = process.env.PORT || 3000 // here we've access a env variable
// they are system variable with some value and their key will be used anywhere
// benifit of this are, we need to change them at only one place
// general use case is like production URL, PORT no, execution mode - something that is used everywhere and doesn't change often
// we can create a .env file and put all our env variables in that

// Assignment - create a HTTP server in C/C++

app.listen(port, () => {
  console.log('created a server using express, listening on 3000')
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/conversations', (req, res) => {
  console.log(req.body) // we can't access body of req - its undefined - because express doesn't parse the body
  // for this we use a middleware - body-parser
  // now we've a body-parser, we need to pass JSON body, there will be no error but we can't get body in req.body
  // because req.body only detects JSON

  res.send('started a conversation')
})

/*
app.get('/health-checkup', (req, res) => {
  if (username != "ravi" && password != "pass") {
    res.status(403).json({
      msg: "cannot authenticate"
    })
    return
  }

  if (kidney != 1 && kidney != 2) {
    res.status(403).json({
      msg: "Incorrect input for kidneys"
    })
    return
  }

  res.send("Your health is alright")
})

app.get('/kidney-checkup', (req, res) => {
  if (username != "ravi" && password != "pass") {
    res.status(403).json({
      msg: "cannot authenticate"
    })
    return
  }

  if (kidney != 1 && kidney != 2) {
    res.status(403).json({
      msg: "Incorrect input for kidneys"
    })
    return
  }

  res.send("Your kidney is alright")
})

app.get('/heart-checkup', (req, res) => {
  if (username != "ravi" && password != "pass") {
    res.status(403).json({
      msg: "cannot authenticate"
    })
    return
  }

  res.send("Your health is alright")
})
*/

// as you can see above checkup APIs, everytime we need to identify user and other imp functions
// now for this, we've to write same authenication code in each API and whatnot
// so to do DRY(do not repeat yourself), we use middlewares

// this is to verify the user, because we've to use this every route, we can also use it like this
// app.use(userMiddleware()) -  so the express uses it everytime a route get hit
function userMiddleware (req, res, next) {
  if (username != "ravi" && password != "pass") {
    res.status(403).json({
      msg: "cannot authenticate"
    })
  } else {
    next()
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidney != 1 && kidney != 2) {
    res.status(403).json({
      msg: "Incorrect input for kidneys"
    })
  } else {
    next()
  } 
}

// here in APIs, we pass the middlewares as callbacks and they get executed from left to right
app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your health is alright")
})

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is alright")
})

app.get('/heart-checkup', userMiddleware, (req, res) => {
  res.send("Your heart is alright")
})

// this is a global middleware, means this will be used by app in all routes
// this will be triggered when we have error in any route
app.use(function (err, req, res, next) {
  return res.status(500).json({
    msg: "error came up",
    err
  })
})