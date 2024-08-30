  const express = require('express')
  const bodyParser = require('body-parser')
  const mongoose = require('mongoose')

  const app = express()
  app.use(bodyParser.json())

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log('created a server using express, listening on 3000')
  })

/*
Some Basics:

Why we need databases, why can't we use in-memory db
1. in memory db will be reset as the machine restarts
2. it takes a lot of space in RAM

Why client can't access directly to DB
1. DB is like either nothing or everything, either it will give you no access or full access
  so anyone can access all data not just admin

NoSQL - its the schema less db query lang.
in SQL, we've to first define the structure of everything like table etc.
in NoSQL, we don't have to do that this means we can store anything even the data that doesn't exists before
lets say, at first I store { username, password } and at second, we can store { email, firstName } at third, { lastname }

there are no restriction on what we can store
mongodb is the library we can use in nodeJS to do this
in mongodb, we can also use more data types like Arrays, Objects.
in Sql we can do this(we've to make another table for this and create link between them using some key)
Another benifit of Mongodb is we can have multiple databases and we can connect to any of them
all databases will be in a cluster

another library, mongoose, which is the in-between SQL and NoSQL
like SQL, we've to define structure/schema so that not everyone can store anything
and we can store Arrays and objects like NoSQL

CRUD - Create/Read/Update/Delete
*/

// to connect to a database - mongodb+srv://<username>:<password>@<cluster-url>/<db> 
mongoose.connect("mongodb+srv://admin:hSJA2TGPg4qV8AxM@cluster0.k0z6u.mongodb.net/test")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
    // here we've create a link of Course table in User class
    // this array will contain IDs of courses purchased by user
  }]
})

const courseSchema = new mongoose.Schema({
  title: String,
  price: String
})

const User = mongoose.model('User', userSchema)
const Course = mongoose.model('Course', courseSchema)
