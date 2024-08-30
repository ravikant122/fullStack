const { Admin } = require('../db/index')

function adminMiddleware (req, res, next) {
  const { username, password } = req.headers

  // we need to find if this user is admin or not using the Admin table in the db
  const adminResultPromise = Admin.findOne({
    username,
    password
  })
  console.log(adminResultPromise) // its a promise, means we can also use async await
  
  adminResultPromise.then((data) => {
    if (data) {
      next()
    } else {
      res.status(403).json({
        msg: "User doesn't exists or not admin"
      })
    }
  })
}

module.exports = adminMiddleware