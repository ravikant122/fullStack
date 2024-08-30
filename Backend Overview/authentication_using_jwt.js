const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000
const privateJWTString = 'adafsaf'

app.listen(port, () => {
  console.log('created a server using express, listening on 3000')
})

/*
generally we use one of these 4 methods to authenticate user
1. hashing
2. encryption
3. JWT and localStorage

1. hashing - convert the string into some string that no one can tell it by looking the hash
  - its only one way, means you can convert string to hash but can't convert hash back to string

2. encryption - its a two way, means we can convert string to encrypted string and vice-versa
  - but we'll need a key for both operations

3. JSON Web Token(JWT) - it converts an object into an long string using some private string(this string should be know to your company only)
  - and this string is called token, server send back this token and we store this token in localStorage
  - with localStorage, the token will be in the browser till user logouts
  - we'll send this token to backend with every route we call in header
  - and backend first verify the token using JWT and the private string
  - if we get diff
*/

const USERS = [
  {
    username: "ravi",
    password: "p@ss0wrd",
    email: "ravi@gmail.com"
  },
  {
    username: "abhi",
    password: "p@ss0wrd1",
    email: "abhi@gmail.com"
  },
  {
    username: "kant",
    password: "p@ss0wrd2",
    email: "kant@gmail.com"
  }
]

function userExists(username, password) {
  if (USERS.find((user) => user.username === username && user.password === password)) {
    return true
  }
  return false;
}

app.post('/signin', (req, res) => {
  const { username, password } = req.body

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user doesn't exists"
    })
  }

  // here we are not storing anything in db means for to verify we don't have to look in the db
  // we'll just have to decode it and verify in the backend
  // one advantage of JWT, it saves the DB call
  const token = jwt.sign({ username }, privateJWTString)
  return res.json({
    token
  })
})

app.get('/getUsers', (req, res) => {
  const token = req.headers.authentication
  try {
    const decoded = jwt.verify(token, privateJWTString)
    const { username } = decoded
    console.log(username)
    // return list of all users except above username
  } catch (e) {
    res.status(403).json({
      msg: 'invalid token'
    })
  }
  
})
