const moongoose = require('mongoose')

moongoose.connect('mongodb+srv://admin:hSJA2TGPg4qV8AxM@cluster0.k0z6u.mongodb.net/test')

const adminSchema = new moongoose.Schema({
  username: String,
  password: String
})

const userSchema = new moongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{
    type: moongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
})

const courseSchema = new moongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number
})

const Admin = moongoose.model('Admin', adminSchema)
const User = moongoose.model('User', userSchema)
const Course = moongoose.model('Course', courseSchema)

module.exports = { Admin, User, Course }