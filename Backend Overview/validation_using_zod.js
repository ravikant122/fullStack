// we can also import it like this
const express = require('express')
const bodyParser = require('body-parser')
const zod = require('zod')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('created a server using express, listening on 3000')
})

app.post('/check-for-array-input', (req, res) => {
  const schema = zod.array(zod.number());

  const kidneys = req.body.kidneys
  // we can also use parse instead of safeParse but parse throws error and safeParse create an error/success object 
  const response = schema.safeParse(kidneys)
  if (!response.success) {
    res.status(411).json({
      response
    })
  } else {
    res.send({
      response
    })
  }
})

// we can use zod anywhere like frontend, backend, in some normal function, we just need input field and it will test them

app.post('/register', (req, res) => {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5),
    name: zod.string(),
    isAdmin: zod.boolean()
  })

  // we can also use parse instead of safeParse but parse throws error and safeParse create an error/success object 
  const response = schema.safeParse(req.body) // we can just pass the whole body and it wil test all the fields
  if (!response.success) {
    res.status(411).json({
      response
    })
  } else {
    res.send({
      response
    })
  }
})