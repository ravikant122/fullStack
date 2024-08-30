const { Router } = require("express")
const userMiddleware = require('../middlewares/user')
const router = Router()

// sign up for user
router.post('/signup', (req, res) => {

})

// purchase course
router.post('/course', userMiddleware, (req, res) => {

})

// fetch all courses
router.get('/courses', userMiddleware, (req, res) => {

})

console.log(module)
module.exports = router
