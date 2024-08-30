const { Router } = require("express")
const router = Router()

const adminMiddleware = require('../middlewares/admin')
const { Admin } = require('../db/index')
const { Course } = require('../db/index')

// sign up for admin
router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  if(!username || !password) {
    return res.status(500).json({
      msg: "Please enter username and password"
    })
  }

  // if its already present
  const data = await Admin.findOne({ username, password })
  if (data) {
    return res.status(403).json({
      msg: "User already exists, please sign in"
    })
  }

  try {
    await Admin.create({ username, password })
    res.json({
      msg: "Admin created successfullly"
    })
  } catch (e) {
    // always log error
    res.status(500).json({
      msg: "Some error occurred while creating the admin"
    })
  }
})

// create a course
router.post('/course', adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body

  try {
    const data = await Course.create({ title, description, imageLink, price })
    console.log(data)
    res.json({
      msg: "Course created successfullly"
    })
  } catch (e) {
    // always log error
    res.status(500).json({
      msg: "Some error occurred while creating the course"
    })
  }
})

// fetch all courses
router.get('/courses', adminMiddleware, (req, res) => {

})

module.exports = router
