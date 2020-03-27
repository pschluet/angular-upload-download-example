const express = require('express')
const { parse } = require('querystring');
const app = express()
const port = 8080

app.post('/file-upload', (request, response) => {
  if (request.method === 'POST') {
    collectRequestData(request, result => {
        console.log(JSON.stringify(result));
    });
  }

  response.set('Access-Control-Allow-Origin', '*')
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

function collectRequestData(request, callback) {
  const FORM_URLENCODED = 'multipart/form-data';
  if(request.headers['content-type'] === FORM_URLENCODED) {
      let body = '';
      request.on('data', chunk => {
          body += chunk.toString();
      });
      request.on('end', () => {
          callback(parse(body));
      });
  }
  else {
      callback(null);
  }
}
