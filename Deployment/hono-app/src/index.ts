import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  // here json method returns a promise because it waits for the body to load and that can take a time to load because
  // there can be a lot of data
  const body = await c.req.json()
  console.log(body)

  const params = c.req.param();
  console.log(params);
  return c.text('Hello Hono!')
})

export default app
