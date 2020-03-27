const express = require('express')
const app = express()
const port = 8080

app.post('/file-upload', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
